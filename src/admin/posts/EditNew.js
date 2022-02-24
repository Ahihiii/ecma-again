import axios from "axios";
import { get, update } from "../../api/posts";
import Dashboard from "../Dashboard";

const EditNew = {
    async render(id) {
        const { data } = await get(id);
        return /* html */`

        <div class="">
        <div id="header">
                ${Dashboard.render()}
            </div>
        <h2 class="text-2xl font-semibold my-4">Cập nhật sản phẩm</h2>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form id="formAddNew">
              <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">

                <div>
                <label for="about" class="block text-sm font-medium text-gray-700">
                Tên sản phẩm
                </label>
                <div class="mt-1">
                  <input type="text" id="name-new" name="about" rows="4" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" value="${data.name}">
                </div>
              </div>

              <div>
                <label for="about" class="block text-sm font-medium text-gray-700">
                Giá
                </label>
                <div class="mt-1">
                  <input type="text" id="price-new" name="about" rows="4" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" value="${data.price}">
                </div>
              </div>

              <div>
              <img src="${data.img}" id="img-preview"/>
                <label for="about" class="block text-sm font-medium text-gray-700">
                Hình ảnh
                </label>
                <div class="mt-1">
                  <input type="file" id="img-new" name="about" rows="4" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Hãy nhập tên sản phẩm">
                </div>
              </div>

                  <div>
                  <label for="about" class="block text-sm font-medium text-gray-700">
                    Nội dung
                  </label>
                  <div class="mt-1">
                    <textarea id="description-new" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" >${data.description}</textarea>
                  </div>
                </div>

                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Cập nhật
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
        `;
    },
    afterRender(id) {
        const formEditPost = document.querySelector("#formEditNew");
        const CLOUDINARY_PRESET_KEY = "gu8wb5cn";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/dahluegqx/image/upload";
        const imgPreview = document.querySelector("#img-preview");
        const imgPost = document.querySelector("#img-new");

        let imgLink = "";

        imgPost.addEventListener("change", (e) => {
            imgPreview.src = URL.createObjectURL(e.target.files[0]);
        });

        formEditPost.addEventListener("submit", async (e) => {
            e.preventDefault();

            const file = document.querySelector("#img-new").files[0];
            if (file) {
            // lấy giá trị của file và gán vào object formData
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", CLOUDINARY_PRESET_KEY);

                // call API cloudinary để đẩy ảnh lên
                const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                    headers: {
                        "Content-Type": "application/form-data",
                    },
                });
                imgLink = data.url;
            }

            // call api thêm bài viết
            update({
                id,
                name: document.querySelector("#name-new").value,
                img: imgLink || imgPreview.src,
                price: document.querySelector("#price-new").value,
                description: document.querySelector("#description-new").value,
            });
        });
    },
};
export default EditNew;