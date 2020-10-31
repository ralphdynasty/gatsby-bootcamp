import React from 'react'
import  { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <div>
            <Layout>
            <Head title="About"/>
            <h1>About</h1>
            <h2>I am a full stack devloper who likes to eat macaroni</h2>
            <p><Link to ="/contact">Contact Me</Link></p>

            </Layout>  
        </div>
    )
}

export default AboutPage