import React from 'react'

function RenderBlogItem({ Item }) {
    return (
        <article className="post">
            <div className="entry-media">
                <a href="#" className="post-thumbnail hover-zoom"><img src="images/images/blog/img-2.jpg" alt="" /></a>
                <span className="posted-on"><strong>23</strong>JUN</span>
            </div>
            <div className="entry-header">
                <h2 className="entry-title"><a href="#">relaxing &amp; travel in our hotel</a></h2>
            </div>
            <div className="entry-content">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p><br />
                <p>But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className="entry-footer">
                <p className="entry-meta">
                    <span className="posted-on">
                        <span className="screen-reader-text">Posted on</span>
                        <span className="entry-time">JUN 23, 2014</span>
                    </span>
                    <span className="entry-author">
                        <span className="screen-reader-text">Posted by </span>
                        <a href="#" className="entry-author-link">
                            <span className="entry-author-name">Jonatha Owens</span>
                        </a>
                    </span>
                    <span className="entry-categories">
                        <a href="#">Food Dinner</a>,<a href="#">Travel</a>
                    </span>
                    <span className="entry-comments-link">
                        <a href="#">3 Comments</a>
                    </span>
                    <span className="entry-tags">
                        <span className="screen-reader-text"><i className="fa fa-tags" /></span>
                        <a href="#">Food</a> -<a href="#">Drink</a> -<a href="#">Event</a>
                    </span>
                </p>
            </div>
        </article>
    );
}
class BlogItem extends React.Component {
    state = {
        blogItems: [
            {
                //data structure needs to be defined
            }
        ]
    }
    render() {
        const items = this.state.blogItems.map((item) => {
            return (
                <RenderBlogItem Item={item} />
            );
        });
        return (
            <div>
                <div className="widget widget_search">
                    <div className="widgetsearch">
                        <form action="#">
                            <input type="search" className="input-text" placeholder="Search your entry here ..." />
                            <input type="submit" className="input-submit" defaultValue="Search" />
                        </form>
                    </div>
                </div>
                {items}
            </div>
        );
    }
}

export default BlogItem;