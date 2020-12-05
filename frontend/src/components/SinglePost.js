import React from 'react'
import PropTypes from 'prop-types'

const SinglePost = props => {
    return (
        <section class="post-section">
        <div class="single-title-top">
            <h1 class="single-title">Post detail title one</h1>
            <div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
        <div>
            <p><span>by Raktim Parasar</span>, <span>on Sunday 4th, 2020</span></p>
            <p><span>Category: React</span>, <span>Total vote <span>5</span></span></p>
        </div>
        <p>Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.</p>
        <div class="single-title-top">
            <p>Comment <span>8</span></p>
            <div>
                <button>UpVote</button>
                <button>DownVote</button>
            </div>
        </div>
    </section>
    )
}

SinglePost.propTypes = {

}

export default SinglePost
