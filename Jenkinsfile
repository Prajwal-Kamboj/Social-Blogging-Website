def COLOR_MAP = [
'SUCCESS': 'good',
'FAILURE': 'danger',
]
pipeline {
    agent {  label 'master' }
    tools {nodejs "node"}
    stages{
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage("Dockerfile Renaming"){
     steps {
       script {
      sh 'pwd'
      if ("${env.GIT_BRANCH}" == 'origin/master') {
      sh 'mv Dockerfile-dev Dockerfile'
    }
    else if ("${env.GIT_BRANCH}" == 'origin/qa') {
      sh 'mv Dockerfile-qa Dockerfile'
    }
      sh 'ls'
    }
    }
  }
    stage("Build"){
     steps {
       script {
      sh 'pwd'
      if ("${env.GIT_BRANCH}" == 'origin/release/production') {
      sh 'npm run build:prod'
    } else if ("${env.GIT_BRANCH}" == 'origin/master') {
      sh 'npm run build:preprod'
    }
    else if ("${env.GIT_BRANCH}" == 'origin/qa') {
      sh 'npm run build:qa'
    }
      sh 'ls'
    }
    }
  }
  stage('Build Docker Image'){
        steps {
          script{
 	        if ("${env.GIT_BRANCH}" == 'origin/release/production') {
         	    dockerImage= sh 'docker build -t 619773824020.dkr.ecr.ap-south-1.amazonaws.com/truefan-website:"Prod$BUILD_NUMBER" .  --no-cache	'
              } else if ("${env.GIT_BRANCH}" == 'origin/master') {
                 dockerImage= sh 'docker build -t 619773824020.dkr.ecr.ap-south-1.amazonaws.com/truefan-website:"PreProd$BUILD_NUMBER" .  --no-cache   '
              }  else if ("${env.GIT_BRANCH}" == 'origin/qa') {
                 dockerImage= sh 'docker build -t 619773824020.dkr.ecr.ap-south-1.amazonaws.com/truefan-website:"qa$BUILD_NUMBER" .  --no-cache '
               }
              }
            }
          }
      stage('ECR Login'){
        steps {
 	     script {
 	                 sh "aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 619773824020.dkr.ecr.ap-south-1.amazonaws.com/truefan-website"
                 }
             }
         }
     stage ('ECR push'){
       steps {
 	    script {
                  if ("${env.GIT_BRANCH}" == 'origin/release/production') {
                      sh 'docker tag 619773824020.dkr.ecr.ap-south-1.amazonaws.com/truefan-website:"Prod$BUILD_NUMBER" 619773824020.dkr.ecr.ap-south-1.amazonaws.com/truefan-website:"Prod$BUILD_NUMBER"'
                      sh 'docker push 619773824020.dkr.ecr.ap-south-1.amazonaws.com/truefan-website:"Prod$BUILD_NUMBER"'
                   } else if ("${env.GIT_BRANCH}" == 'origin/master') {
                      sh 'docker tag 619773824020.dkr.ecr.ap-south-1.amazonaws.com/truefan-website:"PreProd$BUILD_NUMBER" 619773824020.dkr.ecr.ap-south-1.amazonaws.com/truefan-website:"PreProd$BUILD_NUMBER"'
                      sh 'docker push 619773824020.dkr.ecr.ap-south-1.amazonaws.com/truefan-website:"PreProd$BUILD_NUMBER"'
                   }else if ("${env.GIT_BRANCH}" == 'origin/qa') {
                      sh 'docker tag 619773824020.dkr.ecr.ap-south-1.amazonaws.com/truefan-website:"qa$BUILD_NUMBER" 619773824020.dkr.ecr.ap-south-1.amazonaws.com/truefan-website:"qa$BUILD_NUMBER"'
                      sh 'docker push 619773824020.dkr.ecr.ap-south-1.amazonaws.com/truefan-website:"qa$BUILD_NUMBER"'
                  }


             }
           }
         }
      stage("Deploy To EKS"){
        steps {
          script{
            if ("${env.GIT_BRANCH}" == 'origin/release/production') {
                     sh 'cp cicd/hpa-prod.yml cicd/hpa.yml'
                     sh 'kubectl apply -f cicd/hpa.yml'
                     sh 'cp cicd/deployment-prod.yml cicd/deployment.yml'
                     sh 'export BUILD_NUMBER="$BUILD_NUMBER"'
                     sh 'envsubst < cicd/deployment.yml | kubectl apply -f - '
                     sh  '''
                   if ! kubectl rollout status deployment truefan-website; then
                      kubectl rollout undo deployment truefan-website
                      kubectl rollout status deployment truefan-website
                      exit 1
                   fi
                   '''

                   sh 'cp cicd/service-prod.yml cicd/service.yml '
                   sh 'kubectl apply -f cicd/service.yml'
              } else if ( "${env.GIT_BRANCH}" == 'origin/master' ) {
                    sh 'cp cicd/hpa-preprod.yml cicd/hpa.yml'
                    sh 'kubectl apply -f cicd/hpa.yml'
                    sh 'cp cicd/deployment-preprod.yml cicd/deployment.yml'
                    sh 'export BUILD_NUMBER="$BUILD_NUMBER"'
                    sh 'envsubst < cicd/deployment.yml | kubectl apply -f - '
                    sh'''
                   if ! kubectl rollout status deployment truefan-website; then
                      kubectl rollout undo deployment truefan-website
                      kubectl rollout status deployment truefan-website
                      exit 1
                   fi
                   '''
                   sh 'cp cicd/service-preprod.yml cicd/service.yml '
                   sh 'kubectl apply -f cicd/service.yml'
                } else if ( "${env.GIT_BRANCH}" == 'origin/qa' ) {
                        sh 'cp cicd/hpa-qa.yml cicd/hpa.yml'
                        sh 'kubectl apply -f cicd/hpa.yml'
                        sh 'cp cicd/deployment-qa.yml cicd/deployment.yml'
                        sh 'export BUILD_NUMBER="$BUILD_NUMBER"'
                        sh 'envsubst < cicd/deployment.yml | kubectl apply -f - '
                        sh  '''
                       if ! kubectl rollout status deployment truefan-website; then
                       kubectl rollout undo deployment truefan-website
                       kubectl rollout status deployment truefan-website
                       exit 1
                       fi
                       '''
                       sh 'cp cicd/service-qa.yml cicd/service.yml'
                       sh 'kubectl apply -f cicd/service.yml'
              }
            }
         }
      }
    }
post {
      always {
         script {
//                 ":::::::::::GIT_COMMITTER_NAME::::::::::::::::::::::::"
                if ("${env.GIT_BRANCH}" == 'origin/release/production') {
                GIT_COMMITTER_MESSAGE = sh(returnStdout: true, script: "git log --format=format:%s -1").trim()
                GIT_COMMITTER_NAME = sh(returnStdout: true, script: "git show -s --pretty=%an").trim()
                slackSend channel: '#production-jenkins',
                color: COLOR_MAP[currentBuild.currentResult],
                message: "*${currentBuild.currentResult}:*  ${env.JOB_NAME}\nDeployed Branch:- ${env.GIT_BRANCH}.\nCommit id:- ${GIT_COMMIT}.\nGit URl: ${env.GIT_URL}.\nCommitter Name:- ${GIT_COMMITTER_NAME}.\n Commit Message:- ${GIT_COMMITTER_MESSAGE}.\n More info at: ${env.BUILD_URL}"
            }
            else{
                 GIT_COMMITTER_MESSAGE = sh(returnStdout: true, script: "git log --format=format:%s -1").trim()
                 GIT_COMMITTER_NAME = sh(returnStdout: true, script: "git show -s --pretty=%an").trim()
                 slackSend channel: '#pre-prod-jenkins',
                 color: COLOR_MAP[currentBuild.currentResult],
                 message: "*${currentBuild.currentResult}:*  ${env.JOB_NAME}\nDeployed Branch:- ${env.GIT_BRANCH}.\nCommit id:- ${GIT_COMMIT}.\nGit URl: ${env.GIT_URL}.\nCommitter Name:- ${GIT_COMMITTER_NAME}.\n Commit Message:- ${GIT_COMMITTER_MESSAGE}.\n More info at: ${env.BUILD_URL}"
             }
           }
        }
      }
   }
