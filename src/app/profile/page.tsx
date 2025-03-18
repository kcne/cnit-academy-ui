import Image from "next/image";

export default function ProfilePage() {
  return (
    <>
      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex space-x-4">
          <div className="px-4 py-2 rounded-lg hover:bg-gray-200 active:text-blue-600 active:underline my-2">
            <a href="#">Dashboard</a>
          </div>
          <div className="px-4 py-2 rounded-lg hover:bg-gray-200 active:text-blue-600 active:underline my-2">
            <a href="profil.html">Profile</a>
          </div>
          <div className="px-4 py-2 rounded-lg hover:bg-gray-200 active:text-blue-600 active:underline my-2">
            <a href="#">My Courses</a>
          </div>
          <div className="px-4 py-2 rounded-lg hover:bg-gray-200 active:text-blue-600 active:underline my-2">
            <a href="#">My Notes</a>
          </div>
        </div>
        <div className="flex space-x-4 bg-white p-6 rounded-lg shadow-lg">
          <Image
            src="/img1.png"
            width={100}
            height={100}
            alt="Profile"
            className="rounded-full"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-bold">Enes Korac</h2>
            <p className="text-gray-600">33 - Serbia</p>
            <span className="text-purple-600">0 profile visits</span>
          </div>
          <i className="fa fa-pencil text-lg"></i>
        </div>

        {/* Bottom Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {/* Skills Card */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold">Skills</h3>
            <p className="text-gray-500">I have not added a skill yet</p>
          </div>

          {/* Projects Card */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold">Projects</h3>
            <p className="text-gray-500">I have not shared a project yet</p>
          </div>

          {/* Blog Posts Card */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold">Blog Posts</h3>
            <p className="text-gray-500">I have not shared a blog post yet</p>
          </div>

          {/* Education Card */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold">Education</h3>
          </div>
        </div>
      </div>
    </>
  );
}
