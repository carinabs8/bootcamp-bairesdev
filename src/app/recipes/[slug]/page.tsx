"use client"
import Image from "next/image";
import React from 'react'
import ReactDOM from 'react-dom/client'

import StoreProvider from '../../../redux/StoreProvider';
import Recipe from '../../../components/Recipes';
import { usePathname } from 'next/navigation'

interface RecipeDetail {
  params: {
    slug: string;
  }
};

export default function RecipeDetail(props: RecipeDetail){
  const { params } = props;
  const { slug } = params
  return (
    <StoreProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/*{slug}*/}
        <Recipe/>
      </main>
    </StoreProvider>
  );
}
