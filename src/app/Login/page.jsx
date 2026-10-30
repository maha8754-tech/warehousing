"use client";
import { CheckCircle, HelpCircle, Home, X, XCircle } from "lucide-react";
import Link from "next/link";

import { useEffect , useState } from "react";


const imageLS = [
  "them1.jpg",
  "them2.jpg",
  "them3.jpg",
  "them4.jpg",
  "them5.jpg",
  "them6.jpg",
  "them7.jpg"
]

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkingEmail, setCheckingEmail] = useState(false);
    const [emailStatus, setEmailStatus] = useState(null); // null | 'exists' | 'not-found'
    const [userImage, setUserImage] = useState(null);
    const [userName, setUserName] = useState('');
    const [loginMessage, setLoginMessage] = useState('');
    // const [loading, setLoading] = useState(false);

    
//     const handleEmailBlur = async () => {
//       if (!email) {
//         setEmailStatus(null);
//         setUserImage(null);
//         return;
//       }

//       setCheckingEmail(true);
//       setEmailStatus(null);

//       try {
//       const res = await fetch(`/api/check-email?email=${encodeURIComponent(email)}`);
//       const data = await res.json();

//       if (res.ok && data.exists) {
//         setEmailStatus('exists');
//         setUserImage(data.imagePath);
//         setUserName(data.fullName);
//       } else {
//         setEmailStatus('not-found');
//         setUserImage(null);
//         setUserName('');
//       }
//     } catch (error) {
//       setEmailStatus('not-found');
//     } finally {
//       setCheckingEmail(false);
//     }
//   };

    
    // const handleLogin = async (e) => {
    //   e.preventDefault();
    //   setLoading(true);
    //   setLoginMessage('');

    //   try {
    //     const res = await fetch('/api/login', {
    //       method: 'POST',
    //       headers: { 'Content-Type': 'application/json' },
    //       body: JSON.stringify({ email, password }),
    //     });

    //     const data = await res.json();

    //     if (res.ok) {
    //       setLoginMessage('✅ ' + data.message);
    //       
    //       // window.location.href = '/dashboard';
    //     } else {
    //       setLoginMessage('❌ ' + data.message);
    //     }
    //   } catch (error) {
    //     setLoginMessage('❌ خطا در ارتباط با سرور');
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    const [image , setImage] = useState("");
    const [home , setHome] = useState(false)
    const [formLs , setFormLs] = useState("login")
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      password: '',
      mobile: '',
      image: '',
  });
    
    const [imageFile, setImageFile] = useState('null');
    const [imagePreview, setImagePreview] = useState('null');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);


    useEffect(() => {
      const randomIndex = Math.floor(Math.random() * imageLS.length);
      setImage(imageLS[randomIndex]);
    } , []);

    if(!image) return null;

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0]
//     if (file) {
//       setImageFile(file)
//       setImagePreview(URL.createObjectURL(file))
//     }
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage('');

//     try {
//       const data = new FormData() 
//       data.append('fullName' , formData.fullName)
//       data.append('email' , formData.email)
//       data.append('password' , formData.password)
//       data.append('mobile' , formData.mobile)
//       if (imageFile) {
//         data.append('image' , imageFile)
//       }


//       const res = await fetch('/api/users', {
//         method: 'POST',
//         // headers: { 'Content-Type': 'application/json' },
//         body: data,
//         // body: JSON.stringify(formData),
//       });

//       const result = await res.json();

//       if (res.ok) {
//         setMessage('✅ ' + result.message);
//         setFormData({ fullName: '', email: '', password: '' , mobile: '' , image:''});
//         setImageFile(null)
//         setImagePreview(null)
//         // setFormData({ email: '' , mobile: ''});
//       } else {
//         setMessage('❌ ' + result.message);
//       }
//     } catch (error) {
//       setMessage('❌ خطا در ارتباط با سرور');
//     } finally {
//       setLoading(false);
//     }
//   };

    return(
        <div className="relative min-h-screen overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img src={image} alt="Image" className="w-full h-full object-cover"/>
          </div>
          {/* <header className="bg-amber-800 h-100"></header> */}
          {/* <Link href="/" className="z-100">go to home</Link> */}
          <main className="relative z-10 min-h-screen flex items-center justify-center">
            {/* <div className="bg-red-400 w-20 h-20"> */}
              <Link href="/">
                <div onMouseEnter={() => setHome(true)} onMouseLeave={() => setHome(false)} className="absolute top-12 left-98 z-100 bg-white p-2 rounded-3xl hover:cursor-pointer hover:rounded-r-none">
                  <Home className=""/>
                </div>
              </Link>
              {home && (
                <div className="absolute block text-center top-12 left-107 w-35 h-10 z-100 bg-white p-2 rounded-r-3xl cursor-pointer">
                <span className="text-md">صفحه اصلی</span>
              </div>
              )}
              
            {/* </div> */}
            {/* form */}
            {formLs === "login" &&(
              <div className="flex flex-col mt-15 items-center w-full max-w-xl h-130 rounded-2xl bg-white/20 p-8 shadow-xl backdrop-blur-md">
                <div className="grid grid-cols-[30%_60%_30%]">
                  {/* image user */}
                  <div className="flex -mr-10 -mt-22 items-center justify-center bg-gray-200 border-5 border-b-white border-t-white w-30 h-30 rounded-full">
                    {emailStatus === 'exists' && (
                      <img src={userImage || '/default-avatar.png'} alt={userName} className="rounded-full"/>
                    )}
                  </div>
                  <div className="-mt-12">
                    <div className="text-4xl">- - - - - -</div>
                    {!checkingEmail && emailStatus === null && (
                      <HelpCircle size={50} className="absolute -top-5 right-67 text-gray-600 bg-white/50 rounded-4xl"/>
                    )}
                    {!checkingEmail && emailStatus === 'exists' && (
                      <CheckCircle size={50} className="absolute -top-5 right-67 text-green-500 bg-green-900 rounded-4xl"/>
                    )}
                    {!checkingEmail && emailStatus === 'not-found' && (
                      <XCircle size={50} className="absolute -top-5 right-67 text-red-500 bg-red-900 rounded-4xl"/>
                    )}
                    {/* <X size={50} className="absolute -top-5 right-67 text-red-500"/> */}
                  </div>
                  {/* logo crweb */}
                  <div className="flex -mr-10 -mt-22 items-center justify-center bg-purple-300 w-30 h-30 rounded-full">
                    <h1 className=" flex text-2xl text-center">CRWEB</h1>
                  </div>
                </div>
                {/* onSubmit={handleLogin} */}
                <form className="flex flex-1 flex-col -mt-12 justify-center gap-3">

                  <div className="flex flex-col gap-2">
                    <label htmlFor="Email" className="text-sm text-red-600">
                      ایمیل
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      autoComplete="email"
                      placeholder="example@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={handleEmailBlur}
                      pattern="[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,}"
                      className="bg-black/50 w-80 h-12 rounded-2xl text-amber-50 outline-none border border-white/10 focus:border-white/40"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="Password" className="text-sm text-red-600">
                      رمز عبور
                    </label>
                    <input 
                      type="password" 
                      name="password"
                      required
                      // autoComplete="phone"
                      // placeholder=""
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@&$]).{8,}"
                      className="bg-black/50 w-80 h-12 rounded-2xl text-amber-50 outline-none border border-white/10 focus:border-white/40"
                    />
                  </div>
                  {/* <Link href="/"> */}
                    <button 
                      type="submit"
                      disabled={loading}
                      className="w-full h-12 rounded-2xl bg-white text-black font-medium hover:bg-white/50 hover:text-red-600 cursor-pointer transition"
                    >
                      {loading ? 'در حال ورود...' : 'ورود کاربر'}
                    </button>
                  {/* </Link> */}
                    <button 
                      className="bg-amber-400 cursor-pointer hover:bg-amber-50"
                      onClick={() => setFormLs("sign")}
                    >
                     حساب کاربری ندارید؟ 
                    </button>
                </form>
                {/* {message && <p className="mt-10">{message}</p>} */}
                {emailStatus === 'not-found' && (
                  <p style={{ fontSize: 12, color: 'red', marginTop: 5 }}>
                    ❌ این ایمیل ثبت نشده است
                  </p>
                )}
              </div>
            )}
            



            {/* ثثثثثثثثثثبت نامممممممممممممممممممممممم */}
            {formLs === "sign" &&(
              <div className="flex flex-col mt-15 items-center w-full max-w-xl h-130 rounded-2xl bg-white/20 p-8 shadow-xl backdrop-blur-sm">
                <div className="flex -mt-22 items-center justify-center bg-purple-300 w-30 h-30 rounded-full">
                  <h1 className=" flex text-2xl text-center">CRWEB</h1>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col w-143 items-center-safe mt-15 justify-center gap-3">
                  <div className="grid grid-cols-2 gap-2 w-full">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="Name" className="text-sm text-red-600">
                        نام و نام خانوادگی
                      </label>
                      <input 
                        type="text" 
                        name="fullName"
                        required
                        autoComplete="name"
                        placeholder="علی مرتضوی"
                        value={formData.fullName}
                        onChange={handleChange}
                        // pattern="09[0-9]{9}"
                        className="bg-black/50 w-full h-12 rounded-2xl text-amber-50 outline-none border border-white/10 focus:border-white/40"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="Email" className="text-sm text-red-600">
                        ایمیل
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        autoComplete="email"
                        placeholder="example@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        pattern="[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,}"
                        className="bg-black/50 w-full h-12 rounded-2xl text-amber-50 outline-none border border-white/10 focus:border-white/40"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="Password" className="text-sm text-red-600">
                        رمز عبور
                      </label>
                      <input 
                        type="password" 
                        name="password"
                        required
                        // autoComplete="phone"
                        // placeholder=""
                        value={formData.password}
                        onChange={handleChange}
                        pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@&$]).{8,}"
                        className="bg-black/50 w-full h-12 rounded-2xl text-amber-50 outline-none border border-white/10 focus:border-white/40"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-sm text-red-600">
                        موبایل
                      </label>
                      <input 
                        type="tel"
                        name="mobile"
                        required
                        autoComplete="phone"
                        placeholder="09xxxxxxxxx"
                        value={formData.mobile}
                        onChange={handleChange}
                        pattern="09[0-9]{9}"
                        className="bg-black/50 w-full h-12 rounded-2xl text-amber-50 outline-none border border-white/10 focus:border-white/40"
                      />
                    </div>

                    
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-sm text-red-600">
                        پروفایل
                      </label>
                      <input 
                        type="file"
                        // name="mobile"
                        accept="image/*"
                        required
                        // autoComplete="phone"
                        // placeholder="09xxxxxxxxx"
                        // value={formData.mobile}
                        onChange={handleImageChange}
                        // pattern="09[0-9]{9}"
                        className="bg-black/50 w-full h-12 rounded-2xl text-amber-50 outline-none border border-white/10 focus:border-white/40"
                      />
                    </div>

                    {imagePreview && (
                      <div>
                        <img 
                          src={imagePreview} 
                          alt="پیش نمایش" 
                          className="w-25 h-25 object-cover rounded-lg"
                        />
                      </div>
                    )}

                  </div>
                  {/* <Link href="/"> */}
                  <div>
                    <button 
                      type="submit"
                      disabled={loading}
                      className="w-full h-12 rounded-2xl bg-white text-black font-medium hover:bg-white/50 hover:text-red-600 cursor-pointer transition"
                    >
                      {loading ? 'در حال ارسال به سرور...' : 'ثبت نام کاربر'}
                    </button>
                  {/* </Link> */}
                    <button 
                      className="bg-amber-400 cursor-pointer hover:bg-amber-50"
                      onClick={() => setFormLs("login")}
                    >
                     ورود به حساب کاربری
                    </button>
                  </div>
                </form>
                
                {message && <p className="mt-10">{message}</p>}
              </div>
            )}
            


          </main>
          

          

        </div>
    )
}