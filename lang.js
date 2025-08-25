(() => {
    const I18N = {
        EN: {
            /* meta */
            meta: {
                title: "Taner’s Auth Project",
                description:
                    "Multi-step authentication project with sign-in, sign-up, and password recovery flows. Designed and coded by Taner."
            },

            /* nav */
            nav: {
                portfolio: "Portfolio",
                projects: "Projects",
            },

            /* sign in */
            signin: {
                left: {
                    h3: "Welcome Back!",
                    p: "We’ve missed you. Let’s get you signed in.",
                    cta_prefix: "New here?",
                    cta_action: "Create account"
                },
                right: {
                    h2: "Sign In",
                    remember: "Remember me for 30 days",
                    forgot: "Forgot password?"
                },
            },

            /* forgot pass */
            forgot: {
                /* step 1 */
                step1: {
                    left: {
                        h3: "No worries at all!",
                        p:
                            "You can easily reset your password in just a few simple steps",
                    },
                    right: {
                        h2: "Forgot Password",
                        p: "We'll send you a link to reset your password. Please enter the email linked to your account."
                    }
                },
                /* step 2 */
                step2: {
                    left: {
                        h3: "Your code is on its way!",
                        p: "For your security, we’ve sent a one-time code to your email address."
                    },
                    right: {
                        h2: "Verify Your Email",
                        p: "We emailed you a code. Please check your inbox or spam folder."
                    }
                },
                /* step 3 */
                step3: {
                    left: {
                        h3: "You're almost done!",
                        p: "All that’s left is setting a new password. You’re good to go!"
                    },
                    right: {
                        h2: "Reset Your Password",
                        p: "Use at least 8 characters with one uppercase letter and one number."
                    }
                },
                /* step 4 */
                step4: {
                    left: {
                        h2: "You’re ready!",
                        p: "Your password has been reset successfully. You can now sign in to your account."
                    }
                }
            },

            /* sign up */
            signup: {
                /* step 1 */
                step1: {
                    left: {
                        h3: "Let’s get started!",
                        p: "We’re excited to have you with us!"
                    },
                    right: {
                        h2: "Create Your Account",
                        p: "Create your password using at least 8 characters, including one uppercase letter and one number."
                    }
                },
                /* step 2 */
                step2: {
                    left: {
                        h3: "Your code is on its way!",
                        p: "For your security, we’ve sent a one-time code to your email address.!"
                    },
                    right: {
                        h2: "Verify Your Email",
                        p: "We emailed you a code. Please check your inbox or spam folder."
                    }
                },
                /* step 3 */
                step3: {
                    right: {
                        h2: "About You",
                        required: "Required",
                        /* name */
                        full_name: "Full Name",
                        first_name: "First name",
                        last_name: "Last name",
                        /* birthday */
                        birthday: "Birthday",
                        day: "Day",
                        month: "Month",
                        year: "Year",
                        /* phone */
                        phone: "Phone",
                        optional: "Optional",
                        /* profile picture */
                        profile_picture: "Profile Picture",
                        remove: "Remove",
                        /* gender */
                        gender: "Gender",
                        female: "Female",
                        male: "Male",
                        /* location */
                        location: "Location",
                        country: "Country",
                        city: "City",
                        turkey: "Turkey",
                        istanbul: "Istanbul",
                        /* bio */
                        biography: "Biography",
                        bio: "Bio",
                        bio_text:"Work in progress..."
                    }
                },
                /* step 4 */
                step4: {
                    left: {
                        h3: "Your verification code is on its way!",
                        p: "To complete your registration, please check your messages for a 6-digit code."
                    },
                    right: {
                        h2: "Verify Your Phone Number",
                        p: "Please enter the 6-digit code sent to your phone number."
                    }
                },
                /* step 5 */
                step5: {
                    left: {
                        h3: "Welcome aboard!",
                        p: "Everything’s in place. Let’s log you in and get started!"
                    },
                    right: {
                        h2: "You’re All Set!",
                        p: "You can now sign in and start using your account."
                    }
                },
            },
            common: {
                sign_in: "Sign In",
                sign_up: "Sign Up",
                info_banner:
                    "This page was created for project purposes. You may enter random data.",
                designed_by: "Designed & coded by Taner",
                overlay: "Do you confirm the information you entered?",
                email: {
                    label: "Email",
                    placeholder: "you@example.com"
                },
                password: "Password",
                confirm_password: "Confirm Password",
                code: "Code",
                log_in: "Log in",
                back: "Back",
                next: "Next",
                verify: "Verify",
                done: "Done",
                proceed: "Proceed",
                steps: {
                    s1: "Step 1",
                    s2: "Step 2",
                    s3: "Step 3",
                    s4: "Step 4"
                }
            }
        },

        TR: {
            meta: {
                title: "Taner’in Kimlik Doğrulama Projesi",
                description:
                    "Giriş, kayıt ve şifre sıfırlama adımlarından oluşan çok aşamalı kimlik doğrulama projesi. Tasarım ve geliştirme: Taner."
            },

            nav: {
                portfolio: "Portföy",
                projects: "Projeler"
            },

            signin: {
                left: {
                    h3: "Tekrar hoş geldin!",
                    p: "Seni özledik. Hemen giriş yapalım.",
                    cta_prefix: "Yeni misin?",
                    cta_action: "Hesap oluştur"
                },
                right: {
                    h2: "Giriş Yap",
                    remember: "Beni 30 gün hatırla",
                    forgot: "Şifremi unuttum"
                }
            },

            forgot: {
                /* adım 1 */
                step1: {
                    left: {
                        h3: "Hiç sorun değil!",
                        p: "Şifreni birkaç basit adımda kolayca sıfırlayabilirsin."
                    },
                    right: {
                        h2: "Şifremi Unuttum",
                        p: "Şifrenizi sıfırlamanız için size bir bağlantı göndereceğiz. Lütfen hesabınızla ilişkili e-posta adresini giriniz."
                    }
                },
                /* adım 2 */
                step2: {
                    left: {
                        h3: "Kod yolda!",
                        p: "Güvenliğiniz için e-posta adresinize tek kullanımlık bir kod gönderdik."
                    },
                    right: {
                        h2: "E-postanızı Doğrulayın",
                        p: "Size bir kod gönderdik. Gelen kutunuzu ve spam klasörünü kontrol ediniz."
                    }
                },
                /* adım 3 */
                step3: {
                    left: {
                        h3: "Neredeyse bitti!",
                        p: "Sadece yeni şifreyi belirlemen kaldı. Hazırsın!"
                    },
                    right: {
                        h2: "Şifrenizi Sıfırlayın",
                        p: "En az 8 karakter, bir büyük harf ve bir sayı kullanınız."
                    }
                },
                /* adım 4 */
                step4: {
                    left: {
                        h2: "Hazırsınız!",
                        p: "Şifreniz başarıyla sıfırlandı. Artık hesabınıza giriş yapabilirsiniz."
                    }
                }
            },

            signup: {
                /* adım 1 */
                step1: {
                    left: {
                        h3: "Hadi başlayalım!",
                        p: "Aramızda olduğunuz için heyecanlıyız!"
                    },
                    right: {
                        h2: "Hesap Oluştur",
                        p: "En az 8 karakter, bir büyük harf ve bir sayı içeren bir şifre oluşturunuz."
                    }
                },
                /* adım 2 */
                step2: {
                    left: {
                        h3: "Kod yolda!",
                        p: "Güvenliğiniz için e-posta adresinize tek kullanımlık bir kod gönderdik."
                    },
                    right: {
                        h2: "E-postanızı Doğrulayın",
                        p: "Size bir kod gönderdik. Gelen kutunuzu ve spam klasörünü kontrol ediniz."
                    }
                },
                /* adım 3 (form alanları sağ tarafta) */
                step3: {
                    right: {
                        h2: "Hakkınızda",
                        required: "Zorunlu",
                        /* ad soyad */
                        full_name: "Ad Soyad",
                        first_name: "Ad",
                        last_name: "Soyad",
                        /* doğum tarihi */
                        birthday: "Doğum Tarihi",
                        day: "Gün",
                        month: "Ay",
                        year: "Yıl",
                        /* telefon */
                        phone: "Telefon",
                        optional: "İsteğe bağlı",
                        /* profil fotoğrafı */
                        profile_picture: "Profil Fotoğrafı",
                        remove: "Kaldır",
                        /* cinsiyet */
                        gender: "Cinsiyet",
                        female: "Kadın",
                        male: "Erkek",
                        /* konum */
                        location: "Konum",
                        country: "Ülke",
                        city: "Şehir",
                        turkey: "Türkiye",
                        istanbul: "İstanbul",
                        /* bio */
                        biography: "Biyografi",
                        bio: "Biyo",
                        bio_text:"Çalışmalar sürüyor..."
                    }
                },
                /* adım 4 */
                step4: {
                    left: {
                        h3: "Doğrulama kodunuz yolda!",
                        p: "Kaydı tamamlamak için 6 haneli kodu mesajlarınızda kontrol ediniz."
                    },
                    right: {
                        h2: "Telefon Numaranızı Doğrulayın",
                        p: "Telefonunuza gönderilen 6 haneli kodu giriniz."
                    }
                },
                /* adım 5 */
                step5: {
                    left: {
                        h3: "Hoş geldiniz!",
                        p: "Her şey hazır. Giriş yapıp başlayalım!"
                    },
                    right: {
                        h2: "Her Şey Hazır!",
                        p: "Artık giriş yapıp hesabınızı kullanmaya başlayabilirsiniz."
                    }
                }
            },

            common: {
                sign_in: "Giriş Yap",
                sign_up: "Kayıt Ol",
                info_banner: "Bu sayfa proje amaçlı oluşturulmuştur. Rastgele veri girebilirsiniz.",
                designed_by: "Tasarım & kodlama: Taner",
                overlay: "Girdiğiniz bilgileri onaylıyor musunuz?",
                email: { label: "E-posta", placeholder: "ornek@eposta.com" },
                password: "Şifre",
                confirm_password: "Şifreyi Doğrula",
                code: "Kod",
                log_in: "Giriş yap",
                back: "Geri",
                next: "İleri",
                verify: "Doğrula",
                done: "Tamam",
                proceed: "Devam Et",
                steps: { s1: "Adım 1", s2: "Adım 2", s3: "Adım 3", s4: "Adım 4" }
            }
        }
    };
    const $ = (s, root = document) => root.querySelector(s);
    const $$ = (s, root = document) => root.querySelectorAll(s);

    const t = (lang, key) => {
        const parts = key.split(".");
        let cur = I18N[lang];
        for (const p of parts) {
            if (cur && Object.prototype.hasOwnProperty.call(cur, p)) cur = cur[p];
            else return null;
        }
        return cur;
    };

    // data-i18n => textContent
    // data-i18n-placeholder => placeholder
    // data-i18n-aria-label => aria-label
    // data-i18n-alt => alt
    // data-i18n-title => title
    const applyAttr = (lang, attr, dataAttr) => {
        $$(`[${dataAttr}]`).forEach(el => {
            const key = el.getAttribute(dataAttr);
            const val = t(lang, key);
            if (val == null) return;
            if (attr === "text") el.textContent = val;
            else el.setAttribute(attr, val);
        });
    };

    const applyI18n = (lang) => {
        // <html lang="..">
        document.documentElement.setAttribute("lang", lang.toLowerCase());

        // Title & description
        const title = t(lang, "meta.title");
        const desc = t(lang, "meta.description");
        if (title) document.title = title;
        const metaDesc = $('meta[name="description"]');
        if (metaDesc && desc) metaDesc.setAttribute("content", desc);

        // content
        applyAttr(lang, "text", "data-i18n");
        applyAttr(lang, "placeholder", "data-i18n-placeholder");
        applyAttr(lang, "aria-label", "data-i18n-aria-label");
        applyAttr(lang, "alt", "data-i18n-alt");
        applyAttr(lang, "title", "data-i18n-title");
    };

    const setActiveBtn = (lang) => {
        $$(".lang-btn").forEach(b => {
            b.classList.toggle("active", b.textContent.trim().toUpperCase() === lang);
        });
    };

    const setLang = (lang) => {
        localStorage.setItem("lang", lang);
        setActiveBtn(lang);
        applyI18n(lang);
    };

    window.addEventListener("DOMContentLoaded", () => {
        // varsayılan: EN
        const saved = localStorage.getItem("lang") || "EN";
        setLang(saved);

        $$(".lang-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const lang = btn.textContent.trim().toUpperCase();
                setLang(lang);
            });
        });
    });
})();
