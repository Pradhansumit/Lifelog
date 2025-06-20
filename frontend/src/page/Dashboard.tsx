import Sidebar from "@/components/Sidebar";
import BlogEntry from "@/components/main/BlogEntry";

const Dashboard = () => {
  return (
    <>
      <Sidebar>
        <main className="p-4 bg-slate-100 rounded-2xl ">
          <BlogEntry></BlogEntry>
        </main>
      </Sidebar>
    </>
  );
};

export default Dashboard;
