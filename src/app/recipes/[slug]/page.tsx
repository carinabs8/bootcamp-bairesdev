'use client';
import React  from 'react';

import ProviderStorage from '../../../redux/ProviderStorage';
import Recipe from '../../../components/Recipes';

interface RecipeDetail {
  params: {
    slug: string;
  }
}

export default function RecipeDetail(props: RecipeDetail){
  const { params } = props;
  const { slug } = params;
  return (
    <ProviderStorage>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {slug}
        <Recipe/>
      </main>
    </ProviderStorage>
  );
}
