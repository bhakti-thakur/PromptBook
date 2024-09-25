import React from 'react'
import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className=' w-full flex-col'>
        <h1 className=' head_text text-center'>
            Discover & Share
            <br/>
            <span className=' text-center orange_gradient'>
                 your favorite AI prompts
            </span>
        </h1>
        <p className=' mt-5 text-lg text-gray-600 sm:text-xl flex-center  text-center '>
            PromptBook is an open-source AI prompting tool for modern world to Discover, Create and Share creative prompts
        </p>
        <Feed />
    </section>
  )
}

export default Home