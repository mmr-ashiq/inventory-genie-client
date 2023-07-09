import { useEffect, useState } from 'react';
import { getUserProfileApi } from '../../apis/profile.apis';

const img =
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80';
export default function Profile() {
  const [user, setUser] = useState();
  useEffect(() => {
    async function fetchUserProfile() {
      try {
        const {
          data: { user },
        } = await getUserProfileApi();
        setUser(user);
      } catch (e) {
        console.log(e);
      }
    }
    fetchUserProfile();
  }, []);
  return (
    <div className="container">
      <div className="px-12 py-6 grid grid-cols-5 gap-6">
        <div>
          <img src={img} className="w-full h-auto inline-block rounded-lg mb-8" alt="" />
        </div>
        <div className="col-span-4 text-xl space-y-3">
          <div className="flex gap-3">
            <span>Name : </span> <span>{user?.name}</span>
          </div>
          <div className="flex gap-3">
            <span>Email : </span> <span>{user?.email}</span>
          </div>
          <div className="flex gap-3">
            <span>Role : </span> <span>{user?.role}</span>
          </div>
          <div className="flex gap-3">
            <span>Permission : </span> <span>Read, Write, Edit, Delete</span>
          </div>
          <div className="flex gap-3">
            <span>Created At : </span> <span>{user?.createdAt}</span>
          </div>
          <div className="flex gap-3">
            <span>Updated At : </span> <span>{user?.updatedAt}</span>
          </div>
          <div className="flex flex-col gap-3 w-72">
            <input type="password" placeholder="Current Password" className="rounded-lg" />
            <input type="password" placeholder="Confirm Password" className="rounded-lg" />
            <button className="bg-gray-100 rounded-lg transition-all hover:bg-gray-200 py-3">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
