import toastr from "toastr";
import { signup } from "../api/user";
import { $ } from "../utils/selector";
import "toastr/build/toastr.min.css";
import Header from "../components/header";

const SignUp = {
    render() {
        return /* html */`
        <div id="header">
                ${Header.render()}
            </div>    
         <div class="bg-[url('https://wallpaperbat.com/img/180338-esports-wallpaper-esports-wallpaper.png')] min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md h-screen pt-20 w-full space-y-8">
          <div>
            <h2 class="mt-6 text-white text-center text-3xl font-extrabold">
              Đăng ký tài khoản
            </h2>

          </div>
          <form id="formSignup" class="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true">
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address" class="sr-only">Email address</label>
                <input id="emailabc" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
              </div>
              <div>
                <label for="password" class="sr-only">Password</label>
                <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">

                <label for="remember-me" class="ml-2 block text-sm text-white">

                </label>
              </div>

              <div class="text-sm">
                <a href="/#/signin" class="font-medium text-orange-500 hover:text-orange-600">
                  Đăng nhập
                </a>
              </div>
            </div>

            <div>
              <button class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <!-- Heroicon name: solid/lock-closed -->

                </span>
                Đăng ký
              </button>
            </div>
          </form>
        </div>
      </div>
      `;
    },

    afterRender() {
        $("#formSignup").addEventListener("submit", async (e) => {
            e.preventDefault();
            // signup({
            //     email: $("#email").value,
            //     password: $("#password").value,
            // });
            try {
                const { data } = await signup({
                    email: $("#emailabc").value,
                    password: $("#password").value,
                });
                toastr.success("Đăng ký thành công");
                if (data) {
                    setTimeout(() => {
                        document.location.href = "/#/signin";
                    }, 2000);
                }
            } catch (error) {
                toastr.error(error.response.data);
                $("#formSignup").reset();
            }
        });
    },
};

export default SignUp;