import React from 'react'
import Info from './Info'
import BlogItem from './blogItem'
import Reservation from './sidebar'
import Deals from './deal'
import Social from './social'
import Recents from './recents'

function Blog() {
    return (
        <div>
        <Info />
        <section className="section-blog bg-white">
            <div className="container">
                <div className="blog">
                    <div className="row">
                        <h1 className="element-invisible">Blog</h1>
                        <div className="col-md-8 col-md-push-4">
                            <div className="blog-content">
                                <BlogItem />
                            </div>
                        </div>
                        <div class="col-md-4 col-md-pull-8">
                            <div class="sidebar">
                                <Reservation />
                                <Deals />
                                <Recents />
                                <Social />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
}
export default Blog;