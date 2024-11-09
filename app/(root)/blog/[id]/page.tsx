import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import Image from "next/image";
import React from "react";

const BlogDetail = () => {
  return (
    <div className="ml-[2rem] mr-[2rem] mt-5 md:ml-[5rem] md:mr-[5rem] lg:ml-[20rem] lg:mr-[20rem]">
      <h1 className="text-white mt-5 mb-5 text-5xl font-bold">Title</h1>
      <h2 className="text-gray-300 mt-5 mb-5 text-3xl">Description</h2>

      <div className="flex justify-between border-t-2 border-b-2 border-gray-500">
        <div className="max-w-xl flex items-center space-x-4 mb-3 mt-3">
          <Avatar className="size-10">
            <AvatarImage src={"/avatar.png"} alt={"avatar"} />
            <AvatarFallback>
              <User className="mt-2" />
            </AvatarFallback>
          </Avatar>

          <div>
            <p className="text-white text-lg">John Doe</p>
          </div>
        </div>

        <div className="flex flex-col items-start mb-3 mt-3">
          <p className="text-white font-bold">Date Published</p>
          <p className="text-gray-300">9 Nov 2024</p>
        </div>
      </div>

      <Image
        src="/HeroPlaceholder.jpeg"
        alt="placeholder"
        layout="responsive"
        width={1920}
        height={1080}
        className="mt-5 mb-5"
      />
      <p className="text-white text-2xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam error
        non eaque minus minima ea commodi quasi praesentium illo a, atque
        accusamus quisquam quam quos magni quibusdam repudiandae explicabo
        velit, totam porro doloribus omnis fuga! Accusantium laborum quae ullam
        earum aperiam, enim labore at nemo voluptate alias veniam sint neque
        optio ea laudantium nihil omnis minima iusto. Id, obcaecati quisquam ab
        nihil quasi, vitae, facilis assumenda repellendus aliquam corporis
        perferendis laudantium dolor? Minima magnam enim, eum facere ipsa
        nostrum, aliquid optio odio vitae laboriosam corporis. Nam totam dolore
        mollitia nostrum culpa modi cumque dolorum ducimus magni deleniti vitae
        dolor voluptas quibusdam officia, porro itaque quis sit accusantium nisi
        aliquam doloribus! Doloribus alias officia totam esse minus nisi labore
        accusantium tempore dolor, itaque nemo beatae error natus praesentium
        vel aspernatur exercitationem quam voluptatum vitae, distinctio sed
        dolores maxime. Quibusdam doloremque, voluptates deleniti neque ut nemo
        distinctio perferendis blanditiis assumenda natus. Officiis consequatur
        reiciendis dignissimos minus unde amet itaque debitis, quidem ab!
        Aspernatur nesciunt reiciendis odit corrupti ab consequatur libero ut
        molestiae quasi possimus, sed expedita dignissimos suscipit cumque ullam
        recusandae ipsum ducimus sapiente quibusdam eum repudiandae, cupiditate
        optio. Ad perferendis et nulla, quae a nostrum velit soluta
        exercitationem. Dicta dolor nostrum minima sit cum libero aliquid
        officia quas assumenda ad, ex cupiditate, repudiandae suscipit fugit
        possimus eligendi debitis modi ullam iure odit. Perspiciatis vero
        laboriosam vel obcaecati eum reprehenderit nostrum. Rerum tempora alias
        recusandae non delectus temporibus illum voluptas rem neque eum
        provident perferendis natus cumque, autem laboriosam. Ad impedit
        consequuntur debitis nesciunt, voluptatibus deleniti accusantium fugit
        libero natus fugiat itaque? Nam voluptates aliquam fuga quasi quisquam
        architecto sint amet quos et recusandae? Deserunt assumenda eos
        molestias dolorum ducimus libero, suscipit facilis commodi! Soluta magni
        aliquid minima labore, natus error odio sed dolorum dignissimos aperiam
        quisquam eligendi ratione illo quia ullam maiores totam, maxime sapiente
        dicta quo saepe sit molestias. Ut vel ipsa sed, fugiat illum corporis.
        Autem quaerat, tempore quam sequi fugiat dignissimos hic neque, soluta,
        blanditiis mollitia id aut. Delectus facere corrupti error accusamus sit
        hic sequi dolorem dolores, numquam repellendus assumenda provident amet
        cumque, quaerat aut adipisci perferendis quam, tempora beatae sed
        doloremque. Commodi quam, aperiam dolore expedita provident sed nihil
        perferendis? Natus ullam rem sequi in, similique alias temporibus
        voluptate odit? Veniam optio omnis numquam doloremque praesentium
        accusantium nostrum commodi ex odit modi tempore aut ad, architecto
        autem assumenda nisi, velit itaque? Animi molestias consectetur in
        consequuntur?
      </p>
    </div>
  );
};

export default BlogDetail;
