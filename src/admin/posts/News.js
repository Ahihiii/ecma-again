import axios from "axios";
import { reRender } from "../../utils/rerender";
import { getAll, remove } from "../../api/posts";
import Dashboard from "../Dashboard";

const News = {
    async render() {
        const { data } = await getAll();

        return /* html */ `
        <div class="flex flex-col">
        <div id="header">
                ${Dashboard.render()}
            </div>
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Images
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <a href="/Admin/AddNew">Add</a>
              </th>
              
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
          ${data.map((post, index) => `
          
            
            <tr>
              <td class="px-4 py-2 whitespace-nowrap">
                <div class="flex items-center">

                  <div class="flex-shrink-0 h-60 w-80">
                    <img class="h-48 w-40 " src="${post.img}" alt="">
                  </div>

                  <div class="flex-shrink-0 h-60 w-80">
                    <div hidden class="font-medium text-gray-900">${index + 1}</div>
                  </div>
                </div>
              </td>
              <td class="px-4 py-2 whitespace-nowrap">
                <div class="font-medium text-gray-900">${post.name}</div>
              </td>

              <td class="px-4 py-2 whitespace-nowrap">
                <div class="font-medium text-gray-900">${post.price}</div>
              </td>
              
              <td class="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button data-id="${post.id}" class="btn">Remove</button>
              </td>
              <td class="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
              <a href="/#/Admin/${post.id}/EditNew"><button class="">Edit</button> </a>
              
              </td>
            </tr>
            `).join("")}
            <!-- More people... -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
        `;
    },
    afterRender() {
        const btns = document.querySelectorAll(".btn");
        btns.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", async () => {
                const confirm = window.confirm("Bạn có chắc chắn muốn xóa không??");
                if (confirm) {
                    remove(id).then(() => {
                        reRender(News, "#content");
                    });
                }
            });
        });
    },
};

export default News;