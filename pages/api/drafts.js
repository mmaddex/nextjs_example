// https://nextjs.org/docs/pages/building-your-application/configuring/draft-mode
// test with https://node-server-h4yl.onrender.com/api/drafts?slug=blog-post

export default function handler(req, res) {
  res.setDraftMode({ enable: true })
  
  // Fetch the headless CMS to check if the provided `slug` exists
  // getPostBySlug would implement the required fetching logic to the headless CMS
  //const post = await getPostBySlug(req.query.slug)
  const post = {slug: req.query.slug}
   
  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.redirect(post.slug)
}
