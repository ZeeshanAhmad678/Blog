import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/appwriteConfig";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };
    

    return post ? (
        <div className="py-8">
            <Container>
                <div className=" w-full  flex justify-center mb-8 relative  rounded-xl p-2    ">
                    <div className="object-cover border p-2 rounded-xl inline-block ">
                        <img
                            src={appwriteService.getFileView(post.featuredImage)}
                            alt={post.title}
                            className="rounded-xl"
                        />
                        
                        {isAuthor && (
                            <div className="absolute right-4 top-2">
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button bgColor="bg-green-500" className="mr-3 cursor-pointer">
                                        Edit
                                    </Button>
                                </Link>
                                <Button bgColor="bg-red-500" className="cursor-pointer" onClick={deletePost}>
                                    Delete
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
               <div className="w-full flex flex-col items-center mb-6">
                 <div className="md:w-1/2  mb-6">
                     <h1 className="text-2xl md:text-3xl font-merriweather text-center font-bold">{post.title}</h1>
                 </div>
                 <div className="browser-css font-serif-pro mx-auto max-w-3xl text-xl text-justify leading-7 whitespace-pre-line">
                     {parse(post.content)}
                 </div>
               </div >
            </Container>
        </div>
    ) : null;
}