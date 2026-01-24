(() => {
  const I18N = {
    EN: {
      /* EN - META */
      meta: {
        title: "CSS Authentication UI",
        description:
          "A modern multi-step authentication UI featuring sign-in, sign-up, and password recovery flows with smooth animations and responsive design.",
      },

      /* EN - NAV */
      nav: {
        portfolio: "Portfolio",
        signIn: "Sign In",
        signUp: "Sign Up",
      },

      /* EN - SIGN IN */
      /* EN - SIGN IN - 1 */
      signIn: {
        step1: {
          left: {
            h3: "Welcome Back!",
            p: "We’ve missed you. Let’s get you signed in.",
            CA_BTN_leftText: "New here?",
            CA_BTN_rightText: "Create account",
          },
          right: {
            h2: "Sign In",
            rememberMe: "Remember me for 30 days",
            forgotPassword: "Forgot password?",
          },
        },
      },

      /* EN - FORGOT PASSWORD */
      forgotPassword: {
        /* EN - FORGOT PASSWORD - 1 */
        step1: {
          left: {
            h3: "No Worries at All!",
            p: "You can easily reset your password in just a few simple steps.",
          },
          right: {
            h2: "Forgot Password",
            p: "We'll send you a link to reset your password. Please enter the email linked to your account.",
          },
        },
        /* EN - FORGOT PASSWORD - 2 */
        step2: {
          left: {
            h3: "Your Code is on its Way!",
            p: "For your security, we’ve sent a one-time code to your email address.",
          },
          right: {
            h2: "Verify Your Email",
            p: "We emailed you a code. Please check your inbox or spam folder.",
          },
        },
        /* EN - FORGOT PASSWORD - 3 */
        step3: {
          left: {
            h3: "You're Almost Done!",
            p: "All that’s left is setting a new password. You’re good to go!",
          },
          right: {
            h2: "Reset Your Password",
            p: "Use at least 8 characters with one uppercase letter and one number.",
          },
        },
        /* EN - FORGOT PASSWORD - 4 */
        step4: {
          right: {
            h3: "You’re Ready!",
            p: "Your password has been reset successfully. You can now sign in to your account.",
          },
        },
      },

      /* EN - SIGN UP */
      signUp: {
        /* EN - SIGN UP - 1 */
        step1: {
          left: {
            h3: "Let’s Get Started!",
            p: "We’re excited to have you with us!",
          },
          right: {
            h2: "Create Your Account",
            p: "Create your password using at least 8 characters, including one uppercase letter and one number.",
          },
        },
        /* EN - SIGN UP - 2 */
        step2: {
          left: {
            h3: "Your Code is on its Way!",
            p: "For your security, we’ve sent a one-time code to your email address.",
          },
          right: {
            h2: "Verify Your Email",
            p: "We emailed you a code. Please check your inbox or spam folder.",
          },
        },
        /* EN - SIGN UP - 3 */
        step3: {
          right: {
            h2: "About You",
            fullName: "Full Name",
            birthday: "Birthday",
            phone: "Phone",
            optional: "Optional",
            gender: "Gender",
            location: "Location",
            biography: "Biography",
          },
          overlay: "Do you confirm the information you entered?",
        },
        /* EN - SIGN UP - 4 */
        step4: {
          left: {
            h3: "Your Verification Code is on its Way!",
            p: "To complete your registration, please check your messages for a 6-digit code.",
          },
          right: {
            h2: "Verify Your Phone Number",
            p: "Please enter the 6-digit code sent to your phone number.",
          },
        },
        /* EN - SIGN UP - 5 */
        step5: {
          left: {
            h3: "Welcome Aboard!",
            p: "Everything’s in place. Let’s log you in and get started!",
          },
          right: {
            h2: "You’re All Set!",
            p: "You can now sign in and start using your account.",
          },
        },
      },
      /* EN - INPUTS */
      input: {
        email: {
          label: "Email",
          placeholder: "you@example.com",
        },
        password: "Password",
        confirmPassword: "Confirm Password",
        code: "Code",
        firstName: "First Name",
        lastName: "Last Name",
        day: "Day",
        month: "Month",
        year: "Year",
        phone: "Phone",
        gender: {
          male: "Male",
          female: "Female",
        },
        country: {
          label: "Country",
          placeholder: "Turkey",
        },
        city: {
          label: "City",
          placeholder: "Istanbul",
        },
        bio: {
          label: "Bio",
          placeholder: "Work in progress...",
        },
      },
      /* EN - BUTTONS */
      buttons: {
        signIn: "Sign In",
        signUp: "Sign Up",
        logIn: "Log In",
        back: "Back",
        next: "Next",
        done: "Done",
        verify: "Verify",
        proceed: "Proceed",
      },
      /* EN - FOOTER */
      footer: {
        fp: "This is a portfolio project. Any information you enter is not stored.",
        sp: "Designed & coded by Taner Talas",
      },
      steps: {
        s1: "Step 1",
        s2: "Step 2",
        s3: "Step 3",
        s4: "Step 4",
      },
    },

    TR: {
      /* TR - META */
      meta: {
        title: "CSS Kimlik Doğrulama UI",
        description:
          "Giriş yapma, kayıt olma ve parola kurtarma işlemlerini akıcı animasyonlar ve duyarlı tasarımla birleştiren modern, çok adımlı bir kimlik doğrulama arayüzü.",
      },

      /* TR - NAV */
      nav: {
        portfolio: "Portföy",
        signIn: "Giriş Yap",
        signUp: "Kayıt Ol",
      },

      /* TR - SIGN IN */
      /* TR - SIGN IN - 1 */
      signIn: {
        step1: {
          left: {
            h3: "Tekrar Hoşgeldiniz!",
            p: "Sizi çok özledik. Hadi hemen giriş yapalım.",
            CA_BTN_leftText: "Yeni misiniz?",
            CA_BTN_rightText: "Hesap oluştur",
          },
          right: {
            h2: "Giriş Yap",
            rememberMe: "Beni 30 gün boyunca hatırla",
            forgotPassword: "Şifremi unuttum",
          },
        },
      },

      /* TR - FORGOT PASSWORD */
      forgotPassword: {
        /* TR - FORGOT PASSWORD - 1 */
        step1: {
          left: {
            h3: "Hiç Endişelenmeyin!",
            p: "Şifrenizi birkaç basit adımla kolayca sıfırlayabilirsiniz.",
          },
          right: {
            h2: "Şifremi Unuttum",
            p: "Şifrenizi sıfırlamak için size bir bağlantı göndereceğiz. Lütfen hesabınızla bağlantılı e-posta adresini girin.",
          },
        },
        /* TR - FORGOT PASSWORD - 2 */
        step2: {
          left: {
            h3: "Kodunuz Yolda!",
            p: "Güvenliğiniz için, e-posta adresinize tek kullanımlık bir kod gönderdik.",
          },
          right: {
            h2: "E-postanızı Doğrulayın",
            p: "Size bir kod içeren bir e-posta gönderdik. Lütfen gelen kutunuzu veya spam klasörünüzü kontrol edin.",
          },
        },
        /* TR - FORGOT PASSWORD - 3 */
        step3: {
          left: {
            h3: "Neredeyse Bitti!",
            p: "Geriye kalan tek şey yeni bir şifre belirlemek. Artık hazırsınız!",
          },
          right: {
            h2: "Şifrenizi Sıfırlayın",
            p: "En az 8 karakter kullanın ve bunlardan birinin büyük harf, diğerinin ise rakam olmasına dikkat edin.",
          },
        },
        /* TR - FORGOT PASSWORD - 4 */
        step4: {
          right: {
            h3: "Hazırsınız!",
            p: "Parolanız başarıyla sıfırlandı. Artık hesabınıza giriş yapabilirsiniz.",
          },
        },
      },

      /* TR - SIGN UP */
      signUp: {
        /* TR - SIGN UP - 1 */
        step1: {
          left: {
            h3: "Hadi Başlayalım!",
            p: "Aramıza katılacağınız için çok mutluyuz!",
          },
          right: {
            h2: "Hesabınızı Oluşturun",
            p: "Şifrenizi en az 8 karakterden oluşacak şekilde oluşturun; bu karakterlerden en az biri büyük harf, diğeri ise rakam olmalıdır.",
          },
        },
        /* TR - SIGN UP - 2 */
        step2: {
          left: {
            h3: "Kodunuz Yolda!",
            p: "Güvenliğiniz için, e-posta adresinize tek kullanımlık bir kod gönderdik.",
          },
          right: {
            h2: "E-postanızı Doğrulayın",
            p: "Size bir kod içeren bir e-posta gönderdik. Lütfen gelen kutunuzu veya spam klasörünüzü kontrol edin.",
          },
        },
        /* TR - SIGN UP - 3 */
        step3: {
          right: {
            h2: "Hakkınızda",
            fullName: "Ad Soyad",
            birthday: "Doğum Günü",
            phone: "Telefon",
            optional: "İsteğe Bağlı",
            gender: "Cinsiyet",
            location: "Konum",
            biography: "Biyografi",
          },
          overlay: "Girdiğiniz bilgileri onaylıyor musunuz?",
        },
        /* TR - SIGN UP - 4 */
        step4: {
          left: {
            h3: "Doğrulama Kodunuz Yolda!",
            p: "Kayıt işleminizi tamamlamak için lütfen mesajlarınızda yer alan 6 haneli kodu kontrol edin.",
          },
          right: {
            h2: "Telefon Numaranızı Doğrulayın",
            p: "Lütfen telefon numaranıza gönderilen 6 haneli kodu girin.",
          },
        },
        /* TR - SIGN UP - 5 */
        step5: {
          left: {
            h3: "Aramıza Hoş Geldin!",
            p: "Her şey hazır. Hadi giriş yapalım ve başlayalım!",
          },
          right: {
            h2: "Her Şey Hazır!",
            p: "Artık giriş yapabilir ve hesabınızı kullanmaya başlayabilirsiniz.",
          },
        },
      },
      /* TR - INPUTS */
      input: {
        email: {
          label: "E-posta",
          placeholder: "ornek@eposta.com",
        },
        password: "Şifre",
        confirmPassword: "Şifreyi Onayla",
        code: "Kod",
        firstName: "Ad",
        lastName: "Soyad",
        day: "Gün",
        month: "Ay",
        year: "Yıl",
        phone: "Telefon",
        gender: {
          male: "Erkek",
          female: "Kadın",
        },
        country: {
          label: "Ülke",
          placeholder: "Türkiye",
        },
        city: {
          label: "Şehir",
          placeholder: "İstanbul",
        },
        bio: {
          label: "Biyo",
          placeholder: "Çalışmalar devam ediyor...",
        },
      },
      /* TR - BUTTONS */
      buttons: {
        signIn: "Giriş Yap",
        signUp: "Kayıt Ol",
        logIn: "Giriş Yap",
        back: "Geri",
        next: "Devam Et",
        done: "Bitti",
        verify: "Onayla",
        proceed: "Devam Et",
      },
      /* TR - FOOTER */
      footer: {
        fp: "Bu bir portföy projesidir. Girdiğiniz hiçbir bilgi saklanmaz.",
        sp: "Taner Talas tarafından tasarlanmış ve kodlanmıştır.",
      },
      steps: {
        s1: "Adım 1",
        s2: "Adım 2",
        s3: "Adım 3",
        s4: "Adım 4",
      },
    },
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


  const applyAttr = (lang, attr, dataAttr) => {
    $$(`[${dataAttr}]`).forEach((el) => {
      const key = el.getAttribute(dataAttr);
      const val = t(lang, key);
      if (val == null) return;
      if (attr === "text") el.textContent = val;
      else el.setAttribute(attr, val);
    });
  };

  const applyI18n = (lang) => {
    document.documentElement.setAttribute("lang", lang.toLowerCase());

    const title = t(lang, "meta.title");
    const desc = t(lang, "meta.description");
    if (title) document.title = title;
    const metaDesc = $('meta[name="description"]');
    if (metaDesc && desc) metaDesc.setAttribute("content", desc);

    applyAttr(lang, "text", "data-i18n");
    applyAttr(lang, "placeholder", "data-i18n-placeholder");
    applyAttr(lang, "aria-label", "data-i18n-aria-label");
    applyAttr(lang, "alt", "data-i18n-alt");
    applyAttr(lang, "title", "data-i18n-title");
  };

  const setActiveBtn = (lang) => {
    $$(".lang-btn").forEach((b) => {
      b.classList.toggle("active", b.textContent.trim().toUpperCase() === lang);
    });
  };

  const setLang = (lang) => {
    localStorage.setItem("lang", lang);
    setActiveBtn(lang);
    applyI18n(lang);
  };

  window.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("lang") || "EN";
    setLang(saved);

    $$(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.dataset.lang;
        setLang(lang);
      });
    });
  });
})();
