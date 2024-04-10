import { RxChevronLeft } from "react-icons/rx";
import { RxChevronRight } from "react-icons/rx";
import { blogs } from "../constants";
import New from "../components/New";

const Blog = () => {
  return (
    <section id="blogs" className="wrapper">
      <div className="flex items-center justify-between">
        <h1 className="title !text-left">Feature News</h1>
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 rounded-md h-8 border border-gray-300">
            <RxChevronLeft className="text-xl" />
          </div>
          <div className="flex items-center justify-center w-8 h-8 rounded-md border border-gray-300">
            <RxChevronRight className="text-xl" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between flex-wrap gap-4 mt-12">
        {blogs.map((blog) => (
          <New
            key={blog.id}
            {...blog}
          />
        ))}
      </div>
    </section>
  );
};

export default Blog;
