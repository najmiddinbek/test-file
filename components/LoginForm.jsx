'use client'

import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "react-toastify";
import Logtip from "../public/rams.png"

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showAdditionalInput, setShowAdditionalInput] = useState(false);

  const router = useRouter();
  useEffect(() => {
    Aos.init({ duration: 1500 });
    const storedRememberMe = localStorage.getItem("rememberMe");
    if (storedRememberMe) {
      setRememberMe(JSON.parse(storedRememberMe));
    }
  }, []);



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (rememberMe) {
      localStorage.setItem("rememberMe", JSON.stringify(rememberMe));
    } else {
      localStorage.removeItem("rememberMe");
    }

    if (email === "admin" && password === "12345") {
      router.replace("/adminMainPage");
      return;
    }

    if (email === "O`rmanova Yoqutxon" && password === "yoqutxon88") {
      router.replace("/pupilsAdd");
      toast.success(`Xush kelibsiz ${email}`, {
        position: "top-right",
        autoClose: 1000000000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (email === "dashboard" && password === "superadmin") {
      router.replace("/SuperAdmin");
      toast.success(`Xush kelibsiz`, {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (email === "Najmiddinova Nasiba" && password === "nasiba11") {
      router.replace("/pupilsAdd");
      toast.success(`Xush kelibsiz ${email}`, {
        position: "top-right",
        autoClose: 1000000000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (email === "Akbarova Mashhura" && password === "mashhura14") {
      router.replace("/pupilsAdd");
      toast.success(`Xush kelibsiz ${email}`, {
        position: "top-right",
        autoClose: 1000000000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (email === "Nizamova Mahliyo" && password === "mahliyo16") {
      router.replace("/pupilsAdd");
      toast.success(`Xush kelibsiz ${email}`, {
        position: "top-right",
        autoClose: 1000000000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (email === "Ahmedova Dilshoda" && password === "dilshoda75") {
      router.replace("/pupilsAdd");
      toast.success(`Xush kelibsiz ${email}`, {
        position: "top-right",
        autoClose: 1000000000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (email === "Dedaxo`jayeva Gulbahor" && password === "gulbahor88") {
      router.replace("/pupilsAdd");
      toast.success(`Xush kelibsiz ${email}`, {
        position: "top-right",
        autoClose: 1000000000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (email === "Ibragimova Rahima" && password === "rahima71") {
      router.replace("/pupilsAdd");
      toast.success(`Xush kelibsiz ${email}`, {
        position: "top-right",
        autoClose: 1000000000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (email === "Qirg`izova Xanifa" && password === "xanifa13") {
      router.replace("/pupilsAdd");
      toast.success(`Xush kelibsiz ${email}`, {
        position: "top-right",
        autoClose: 1000000000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (email === "Xabbayeva Xolida" && password === "xolida65") {
      router.replace("/pupilsAdd");
      toast.success(`Xush kelibsiz ${email}`, {
        position: "top-right",
        autoClose: 1000000000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (email === "Parpiyeva Umida" && password === "umida34") {
      router.replace("/pupilsAdd");
      toast.success(`Xush kelibsiz ${email}`, {
        position: "top-right",
        autoClose: 1000000000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (email === "Mamurova Dilfuza" && password === "dilfuza98") {
      router.replace("/pupilsAdd");
      toast.success(`Xush kelibsiz ${email}`, {
        position: "top-right",
        autoClose: 1000000000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (email === "Ismailova Gulchehra" && password === "gulchehra100") {
      router.replace("/pupilsAdd");
      toast.success(`Xush kelibsiz ${email}`, {
        position: "top-right",
        autoClose: 1000000000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (email === "Mutalova Yorqinoy" && password === "yorqinoy56") {
      router.replace("/pupilsAdd");
      toast.success(`Xush kelibsiz ${email}`, {
        position: "top-right",
        autoClose: 1000000000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (email === "G`aybullayeva Barchinoy" && password === "barchinoy81") {
      router.replace("/pupilsAdd");
      toast.success(`Xush kelibsiz ${email}`, {
        position: "top-right",
        autoClose: 1000000000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (email === "Muradov Mahmudjon" && password === "mahmudjon25") {
      router.replace("/pupilsAdd");
      toast.success(`Xush kelibsiz ${email}`, {
        position: "top-right",
        autoClose: 1000000000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (email === "Ibrahimov Ma'murjon" && password === "mamurjon30") {
      router.replace("/pupilsAdd");
      toast.success(`Xush kelibsiz ${email}`, {
        position: "top-right",
        autoClose: 1000000000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (email === "Jo`rayeva Nargiza" && password === "nargizajorayeva18") {
      router.replace("/pupilsAdd");
      toast.success(`Xush kelibsiz ${email}`, {
        position: "top-right",
        autoClose: 1000000000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (email === "Ubayeva Feruza" && password === "ubayevaferuza99") {
      router.replace("/pupilsAdd");
      toast.success(`Xush kelibsiz ${email}`, {
        position: "top-right",
        autoClose: 1000000000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (email === "Abbasova Naima" && password === "naima122") {
      router.replace("/pupilsAdd");
      toast.success(`Xush kelibsiz ${email}`, {
        position: "top-right",
        autoClose: 1000000000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (email === "Mehmanova Zebohon" && password === "zebohon72") {
      router.replace("/pupilsAdd");
      toast.success(`Xush kelibsiz ${email}`, {
        position: "top-right",
        autoClose: 1000000000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    if (email === "Islomjon" && password === "islomjon08") {
      router.replace("/pupilsAdd");
      toast.success(`Xush kelibsiz ${email}`, {
        position: "top-right",
        autoClose: 1000000000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (email === "Mahkamova Karima" && password === "karima44") {
      router.replace("/pupilsAdd");
      toast.success(`Xush kelibsiz ${email}`, {
        position: "top-right",
        autoClose: 1000000000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (email === "Qozaqova Rohathon" && password === "rohathon67") {
      router.replace("/pupilsAdd");
      toast.success(`Xush kelibsiz ${email}`, {
        position: "top-right",
        autoClose: 1000000000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (email === "Mehmanova Sharipa" && password === "sharipa70") {
      router.replace("/pupilsAdd");
      toast.success(`Xush kelibsiz ${email}`, {
        position: "top-right",
        autoClose: 1000000000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (email === "Mahmudov Ikromjon" && password === "ikromjon77") {
      router.replace("/pupilsAdd");
      toast.success(`Xush kelibsiz ${email}`, {
        position: "top-right",
        autoClose: 1000000000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (email === "Tojiboyeva Tursunoy" && password === "tursunoy22") {
      router.replace("/pupilsAdd");
      toast.success(`Xush kelibsiz ${email}`, {
        position: "top-right",
        autoClose: 1000000000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (email === "Mamadaliyev Athamjon" && password === "athamjon32") {
      router.replace("/pupilsAdd");
      toast.success(`Xush kelibsiz ${email}`, {
        position: "top-right",
        autoClose: 1000000000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (email === "Ulug`xo`jayeva Chinixon" && password === "chinixon108") {
      router.replace("/pupilsAdd");
      toast.success(`Xush kelibsiz ${email}`, {
        position: "top-right",
        autoClose: 1000000000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (email === "Shojalilova Muyassar" && password === "muyassar111") {
      router.replace("/pupilsAdd");
      toast.success(`Xush kelibsiz ${email}`, {
        position: "top-right",
        autoClose: 1000000000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (email === "Saydullayev Muhammad" && password === "saydullayev45") {
      router.replace("/pupilsAdd");
      toast.success(`Xush kelibsiz ${email}`, {
        position: "top-right",
        autoClose: 1000000000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (email === "Otaboyev Botirjon" && password === "otaboyev69") {
      router.replace("/pupilsAdd");
      toast.success(`Xush kelibsiz ${email}`, {
        position: "top-right",
        autoClose: 1000000000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (email === "Nuriddinova Mohira" && password === "mohira90") {
      router.replace("/pupilsAdd");
      toast.success(`Xush kelibsiz ${email}`, {
        position: "top-right",
        autoClose: 1000000000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (email === "Mashrapov Alijon" && password === "alijonmashrapov") {
      router.replace("/pupilsAdd");
      toast.success(`Xush kelibsiz ${email}`, {
        position: "top-right",
        autoClose: 1000000000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (email === "Boyxanova Muqaddas" && password === "muqaddas09") {
      router.replace("/pupilsAdd");
      toast.success(`Xush kelibsiz ${email}`, {
        position: "top-right",
        autoClose: 1000000000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (email === "Xamrayev Sohibboy" && password === "sohibboy79") {
      router.replace("/pupilsAdd");
      toast.success(`Xush kelibsiz ${email}`, {
        position: "top-right",
        autoClose: 1000000000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (email === "Majnunov Elyor" && password === "elyor198") {
      router.replace("/pupilsAdd");
      toast.success(`Xush kelibsiz ${email}`, {
        position: "top-right",
        autoClose: 1000000000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (email === "Mashrapov Alijon" && password === "alijon77") {
      router.replace("/pupilsAdd");
      toast.success(`Xush kelibsiz ${email}`, {
        position: "top-right",
        autoClose: 1000000000000000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (!email || !password) {
      toast.error("Please enter valid credentials", {
        position: "top-center",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      router.replace("dashboard");
      router.push("/pupilsAdd");
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div className="container mx-auto">
      <div className="login_section flex justify-between items-center h-[100vh]">
        <div data-aos="fade-down" className="login_section_left w-[50%] border-r-2 mr-10 pr-">
          {/* Saqlangan matnni o'qib olish */}
          <h1 className="xl:text-[45px] login_text  text-[#293273] font-[700] leading-[80px] tracking-[2%]">
            Hurmatli foydalanuvchi <br /> Login parolingizni Kiriting.
          </h1>
          <div className="flex justify-center">
            <Image className="xl:my-10 login_image -ml-[100px]" src={Logtip} width={350} height={200} alt="Image" />
          </div>
        </div>
        <form data-aos="fade-up" onSubmit={handleSubmit} className="login_form flex flex-col rounded-[20px] w-[50%]">
          <h1 className="text-3xl  text-[#293273] font-[700] leading-[80px] tracking-[2%]">
            LOGIN BILAN KIRISH
          </h1>
          <p className="my-3 text-[15px] text-[#293273] font-[600]">
            Maktab mamuryati tomonidan berilgan elektron pochta hamda login parolni kiriting
          </p>
          <label className="my-3" htmlFor="">
            Elektron pochta
          </label>
          <input
            className="border-2 rounded-md outline-none py-4 px-3"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Elektron pochta kiriting..."
          />
          <label className="my-3" htmlFor="">
            Login parolni kiriting
          </label>
          <input
            className="border-2 rounded-md outline-none py-4 px-3"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Login parolni kiritish..."
          />
          <button className="green my-4 rounded-md text-white font-bold cursor-pointer px-6 py-4">
            Kirish
          </button>
        </form>
      </div>
    </div>
  );
}

