export default (`
                (function (w, d, s, l, i) {
                    w[l] = w[l] || [];
                    w[l].push({
                        'gtm.start':
                            new Date().getTime(), event: 'gtm.js'
                    });
                    var f = d.getElementsByTagName(s)[0],
                        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
                    j.async = true;
                    j.src =
                        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                    f.parentNode.insertBefore(j, f);
                })(window, document, 'script', 'dataLayer', 'GTM-KTS7242');
                
                var clevertap = {event: [], profile: [], account: [], onUserLogin: [], notifications: [], privacy: []};
                // replace with the CLEVERTAP_ACCOUNT_ID with the actual ACCOUNT ID value from your Dashboard -> Settings page
                clevertap.account.push({"id": "4WK-664-6W6Z"});
                clevertap.privacy.push({optOut: false}); //set the flag to true, if the user of the device opts out of sharing their data
                clevertap.privacy.push({useIP: false}); //set the flag to true, if the user agrees to share their IP data
                (function () {
                    var wzrk = document.createElement('script');
                    wzrk.type = 'text/javascript';
                    wzrk.async = true;
                    wzrk.src = ('https:' == document.location.protocol ? 'https://d2r1yp2w7bby2u.cloudfront.net' : 'https://static.clevertap.com') + '/js/a.js';
                    var s = document.getElementsByTagName('script')[0];
                    s.parentNode.insertBefore(wzrk, s);
                })();
                
                (function (b, r, a, n, c, h, _, s, d, k) {
                    if (!b[n] || !b[n]._q) {
                        for (; s < _.length;) c(h, _[s++]);
                        d = r.createElement(a);
                        d.async = 1;
                        d.src = "https://cdn.branch.io/branch-latest.min.js";
                        k = r.getElementsByTagName(a)[0];
                        k.parentNode.insertBefore(d, k);
                        b[n] = h
                    }
                })(window, document, "script", "branch", function (b, r) {
                    b[r] = function () {
                        b._q.push([r, arguments])
                    }
                }, {
                    _q: [],
                    _v: 1
                }, "addListener applyCode autoAppIndex banner closeBanner closeJourney creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setBranchViewData setIdentity track validateCode trackCommerceEvent logEvent disableTracking".split(" "), 0);
                // init Branch
                branch.init('key_live_pcN4A1gP6v6O4OlBfapgAcbhtvpzSSki');
                
                !function (f, b, e, v, n, t, s) {
                    if (f.fbq) return;
                    n = f.fbq = function () {
                        n.callMethod ?
                            n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                    };
                    if (!f._fbq) f._fbq = n;
                    n.push = n;
                    n.loaded = !0;
                    n.version = '2.0';
                    n.queue = [];
                    t = b.createElement(e);
                    t.async = !0;
                    t.src = v;
                    s = b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t, s)
                }(window, document, 'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '441056050207182');
                fbq('track', 'PageView');
`)