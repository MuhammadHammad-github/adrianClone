import React from "react";
import Hero from "../components/Hero";
import {
  Facebook,
  FacebookOutlined,
  LinkedIn,
  Pinterest,
  Twitter,
} from "@mui/icons-material";
import MyInput from "../components/MyInput";

const BlogSingle = () => {
  return (
    <div>
      <Hero heading={"Latest News Single"} path={"Latest News Single"} />
      <div className="my-20 respPx20">
        <div>
          <img
            src="https://demo.themefisher.com/adrian-bootstrap/images/blog/blog-post-1.jpg"
            alt="blog image"
            className="max-w-full h-auto"
          />
        </div>
        <div className="my-10 flex flex-col gap-5">
          <h2 className="capitalize text-[1.75rem] font-[600]">
            How to wear bright shoes
          </h2>
          <div className="flex gap-3 items-center">
            <a href="#" className="text-sunsetOrange">
              Admin
            </a>
            <span>20 Mar 2020</span>
            <a href="#" className="text-sunsetOrange">
              lifestyle
            </a>
            <a href="#" className="text-sunsetOrange">
              travel
            </a>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
            vitae placeat ad architecto nostrum asperiores vel aperiam, veniam
            eum nulla. Maxime cum magnam, adipisci architecto quibusdam cumque
            veniam fugiat quae. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Odio vitae ab doloremque accusamus sit, eos
            dolorum officiis a perspiciatis aliquid. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Quod, facere.
          </p>
          <div className="py-5 border-l-4 px-4 border-sunsetOrange">
            <p className="text-black">
              Lid est laborum dolo rumes fugats untras. Etharums ser quidem
              rerum facilis dolores nemis omnis fugats vitaes nemo minima rerums
              unsers sadips amets.. Sed ut perspiciatis unde omnis iste natus
              error
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            illo deserunt necessitatibus quibusdam sint, eos explicabo tenetur
            molestiae vero facere, aspernatur sit mollitia perferendis
            reiciendis. Deleniti magni explicabo sed alias fugit amet animi
            molestias ipsum maiores. Praesentium sint, id laborum quos. Tempora
            inventore est, dolor corporis quis doloremque nostrum, eos velit
            culpa quasi labore. Provident laborum porro nihil iste, magnam
            officia nemo praesentium autem, libero vel officiis. Omnis pariatur
            nam voluptatem voluptate at officia repellat ea beatae eligendi?
            Mollitia error saepe, aperiam facere. Optio maiores deleniti
            veritatis eaque commodi atque aperiam, debitis iste alias eligendi
            ut facilis earum! Impedit, tempore.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex error
            esse a dolore, architecto sapiente, aliquid commodi, laudantium eius
            nemo enim. Enim, fugit voluptatem rem molestiae. Sed totam quis
            accusantium iste nesciunt id exercitationem cumque repudiandae
            voluptas perspiciatis, consequatur quasi, molestias, culpa odio
            adipisci. Nesciunt optio fugiat iste quam modi, ex vitae odio
            pariatur! Corrupti explicabo at harum qui doloribus, sit dicta nemo,
            dolor, enim eum molestias fugiat obcaecati autem eligendi? Nisi
            delectus eaque architecto voluptatibus, unde sit minus quae quod
            eligendi soluta recusandae doloribus, officia, veritatis voluptatum
            eius aliquam quos. Consectetur, nisi? Veritatis totam, unde nostrum
            exercitationem tempora suscipit, molestias, deserunt ipsum laborum
            aut iste eaque? Vitae delectus dicta maxime non mollitia? Sapiente
            eos a quia eligendi deserunt repudiandae modi molestias tenetur
            autem pariatur ullam itaque, quas eveniet, illo quam rerum ex
            obcaecati voluptatum nesciunt incidunt culpa provident illum soluta.
            Voluptas possimus nesciunt inventore perspiciatis neque fugiat,
            magnam natus repellendus praesentium eum voluptatum, alias incidunt,
            tempora reprehenderit recusandae et numquam itaque ratione dolor
            voluptatibus in commodi ut! Neque deserunt nostrum commodi dolor
            natus quo, non vitae deleniti, vero voluptatem error aspernatur
            veniam expedita numquam amet quia in dolores velit esse molestiae!
            Iusto architecto accusantium quisquam recusandae quod vero quia.
          </p>
        </div>
        <div className="my-10">
          <h4 className="border-b py-3 border-[#dee2e6]">Share this post</h4>
          <div className="my-4">
            <FacebookOutlined className="p-1" />
            <Twitter className="p-1" />
            <LinkedIn className="p-1" />
            <Pinterest className="p-1" />
          </div>
          <h3 className="mt-8">Comments 03</h3>
          <div>
            <Comment />
            <div className="ml-24 border-t  border-[#dee2e6]">
              <Comment />
            </div>
            <Comment className={"border-t  border-[#dee2e6]"} />
          </div>
        </div>
        <div className="my-10">
          <h4>Leave Your Comments</h4>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="my-5 grid 550px:grid-cols-2 grid-cols-1 gap-x-8 gap-y-4">
              <MyInput placeholder={"Name *"} required />
              <MyInput placeholder={"Email *"} required />
              <div className="550px:col-span-2">
                <MyInput placeholder={"Website"} />
              </div>
              <textarea
                name="comment"
                id="comment"
                rows={"6"}
                placeholder="Comment"
                className="550px:col-span-2 py-[0.375rem] px-[.75rem] text-gray outline-none focus:border-sunsetOrange transitional border border-[#dee2e6]"
              ></textarea>
            </div>
            <div className="">
              <button className="btn px-10 !py-4 text-lg hover:!bg-[#23272b] !w-max bg-[#343a40] text-white">
                Send Comment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogSingle;
const Comment = ({ className }) => {
  return (
    <div className={`${className} flex items-start gap-4 py-5`}>
      <div>
        <img
          src="https://demo.themefisher.com/adrian-bootstrap/images/avater.jpg"
          alt="avatar"
          className="max-w-full h-auto object-cover min-w-20 w-20"
        />
      </div>
      <div>
        <h5>Carole Marvin</h5>
        <p>15 january 2015 At 10:30 pm</p>
        <p className="text-black">
          Ne erat velit invidunt his. Eum in dicta veniam interesset, harum
          fuisset te nam ea lupta definitionem.
        </p>
        <button className="text-sm text-white bg-slate-800 py-[5px] px-[10px]">
          Reply
        </button>
      </div>
    </div>
  );
};
