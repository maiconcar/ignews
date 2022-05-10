import { Head } from 'next/document';
import styles from './styles.module.scss';

export default function Posts () {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main> 
                <div>
                    <a>
                       <time> 18 de Fevereiro de 2022 </time> 
                       <strong> Creating a Monorepo with Lerna & Yarn Workspaces </strong>
                       <p> n this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
                    </a>
                    <a>
                       <time> 18 de Fevereiro de 2022 </time> 
                       <strong> Creating a Monorepo with Lerna & Yarn Workspaces </strong>
                       <p> n this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
                    </a>
                    <a>
                       <time> 18 de Fevereiro de 2022 </time> 
                       <strong> Creating a Monorepo with Lerna & Yarn Workspaces </strong>
                       <p> n this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
                    </a>
                </div>
            </main>
        </>


    );
}