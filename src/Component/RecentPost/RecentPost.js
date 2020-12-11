import React ,{useEffect}from "react";
import './RecentPost.css';
import Aos from 'aos';

const RecentPost = () => {

    useEffect(() => {
        Aos.init({ duration: 1600 });
    }, []);

    return (
        <div className='mb4'>
            <div data-aos='fade-up' className='f1 tc'>Recents</div>
        <div data-aos='fade-right' className='wrapper'>
            <div className='recent-card'>
                <img src='https://images.unsplash.com/photo-1507587396692-5afe1f777676?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80' alt='' />
                <div className='info'>
                    <h1>Heading</h1>
                    <p>loerncdkjn dcdjcndsc ansa xsac ewc dcdw cdc wdc w cwc wcwecw hhbh</p>
                </div>
            </div>
            <div className='recent-card'>
                <img src='https://images.unsplash.com/photo-1507587396692-5afe1f777676?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80' alt='' />
                <div className='info'>
                    <h1>Heading</h1>
                    <p>loerncdkjn dcdjcndsc ansa xsac ewc dcdw cdc wdc w cwc wcwecw hhbh</p>
                </div>
            </div>
            <div className='recent-card'>
                <img src='https://images.unsplash.com/photo-1507587396692-5afe1f777676?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80' alt='' />
                <div className='info'>
                    <h1>Heading</h1>
                    <p>loerncdkjn dcdjcndsc ansa xsac ewc dcdw cdc wdc w cwc wcwecw hhbh</p>
                </div>
            </div>

        </div>
        <div data-aos='fade-left' className='wrapper'>
            <div className='recent-card'>
                <img src='https://images.unsplash.com/photo-1507587396692-5afe1f777676?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80' alt='' />
                <div className='info'>
                    <h1>Heading</h1>
                    <p>loerncdkjn dcdjcndsc ansa xsac ewc dcdw cdc wdc w cwc wcwecw hhbh</p>
                </div>
            </div>
            <div className='recent-card'>
                <img src='https://images.unsplash.com/photo-1507587396692-5afe1f777676?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80' alt='' />
                <div className='info'>
                    <h1>Heading</h1>
                    <p>loerncdkjn dcdjcndsc ansa xsac ewc dcdw cdc wdc w cwc wcwecw hhbh</p>
                </div>
            </div>
            <div className='recent-card'>
                <img src='https://images.unsplash.com/photo-1507587396692-5afe1f777676?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80' alt='' />
                <div className='info'>
                    <h1>Heading</h1>
                    <p>loerncdkjn dcdjcndsc ansa xsac ewc dcdw cdc wdc w cwc wcwecw hhbh</p>
                </div>
            </div>
        </div>
        </div>
    );
}

export default RecentPost;