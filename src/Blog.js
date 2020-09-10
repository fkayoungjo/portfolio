import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import medium from './medium.svg.png'

export const Blog = (props) => {

    return (
      <div className="grey" id="blog">
          <Container className = "divs">
            <h1 className= "name">LATEST POST</h1>
            <h5 className= "h6">Powered by <a href ="https://medium.com/@jordan.simon55" target="_blank" rel="noopener noreferrer"><img width="60.6" height="12" src={medium} alt="medium logo"/></a></h5>
            <Row>
            <Col xs="6" sm="4"><blockquote className="embedly-card"><h4><a href="https://medium.com/@jordan.simon55/panda-review-e1451b178f83" rel="noopener noreferrer" target="_blank">Panda Review</a></h4><p>Since I follow the Pomodoro method, oftentimes I find myself trailing off and losing focus. Sometimes that looks like opening a tab to online shop, other times study stats of fantasy sports. I've never been a fan of plugins, but after playing around the chrome extension Panda, I find myself falling down the rabbit hole of new languages in the pipeline and awesome vector animations.</p></blockquote>
            <script async src="//cdn.embedly.com/widgets/platform.js" charSet="UTF-8"></script> </Col>
            <Col xs="6" sm="4"><blockquote className="embedly-card"><h4><a href="https://medium.com/@jordan.simon55/what-is-a-framework-fb567413482c" rel="noopener noreferrer" target="_blank">What is a Framework?</a></h4><p>Before we can learn about what a framework is we must understand what a programming language is. A programming language is essentially how we communicate with computers and tell them what to do through the use of syntax and semantics. A framework is a collection of programs brought together to accomplish a task, improving efficiency when creating new software.</p></blockquote>
            <script async src="//cdn.embedly.com/widgets/platform.js" charSet="UTF-8"></script> </Col>
            <Col sm="4"><blockquote className="embedly-card"><h4><a href="https://medium.com/@jordan.simon55/binding-pry-and-how-it-helped-me-learn-ruby-69a02c3862fa" rel="noopener noreferrer" target="_blank">Binding.pry and how it helped me learn RUBY</a></h4><p>When learning to code, everyone catches on at different rates. Everyone's mind processes this new information at their own speed. Learning to code is learning how to speak to computers. It's learning a language that you have never been exposed to. When I decided to learn to code, I knew it would be a daunting task.</p></blockquote>
            <script async src="//cdn.embedly.com/widgets/platform.js" charSet="UTF-8"></script> </Col>
            </Row>
          </Container>
      </div>
    )
  }

export default Blog;
