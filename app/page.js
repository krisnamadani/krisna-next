import Image from "next/image";
import { FaLaravel } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-md flex flex-wrap flex-col items-center justify-between mx-auto p-4">
        <div className="text-center flex flex-col items-center mx-auto mb-10">
          <Image
            class="rounded-full w-32 h-32 shadow-lg mb-3"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt="image description"
            width={200}
            height={200}
          />
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Krisna Madani
          </h5>
          <span class="text-sm text-gray-500 dark:text-gray-400 mb-5">
            Full Stack Developer
          </span>
          <p class="mb-3 text-gray-500 dark:text-gray-400 text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry`s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="text-center flex flex-col items-center mx-auto mb-10">
          <h5 className="mb-3 text-xl font-medium text-gray-900 dark:text-white">
            Skills
          </h5>
          <div className="flex flex-wrap justify-center">
            <div className="flex flex-col items-center mx-2">
              <FaLaravel className="text-5xl text-red-500" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Laravel
              </span>
            </div>
          </div>
        </div>
        <div className="text-center flex flex-col items-center mx-auto">
          <h5 className="mb-3 text-xl font-medium text-gray-900 dark:text-white">
            Portofolio
          </h5>
        </div>
      </div>
    </main>
  );
}
