import React from 'react';
import Stories from './Stories';
import Posts from "./Posts";
import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";
import { useSession } from "next-auth/react";

function Feed() {
    const {data: session} = useSession();
  return (
    <main className={`grid grid-cols-1 md:grid-cols-2 md:max-w-2xl xl:grid-cols-3 xl:max-w-4xl mx-auto ${!session && "!grid-cols-1 !max-w-2xl"}`}>
        <section className='col-span-2'>
            <Stories />
            <Posts />
        </section>

        {session && <section className='hidden xl:inline-grid md:col-span-1'>
            <div className='fixed top-12'>
                <MiniProfile />
                <Suggestions />
            </div>
        </section>}
    </main>
  )
}

export default Feed