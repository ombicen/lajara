import React from 'react'
import ElementorCss from './ElementorCss'
const PostPage = ({ page, data }) => {
  let usingElementor = false;
  //this will set content by priority Elementor > Wordpress Content > Block Content
  //also change usingElementor to true if that's the case to avoid unnecessary import
  const content = (page?.elementor && page.elementor.length > 5 && (usingElementor = true)) ? page.elementor : ((page?.content?.rendered && page.content.rendered.length > 5) ? page.content.rendered : data.text);

  return <>
    {usingElementor && (
      <style dangerouslySetInnerHTML={{ __html: ElementorCss }} />
    )}

    <div className="spacer l"></div>


    <div className="contained">
      {content && <div className="text" dangerouslySetInnerHTML={{ __html: content }} />}
    </div>

    <div className="spacer xl"></div>

  </>
}

export default PostPage;