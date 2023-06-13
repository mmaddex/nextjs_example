import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')
  // In reality, this would call the headless CMS
  const post = await getPostBySlug(slug)
  draftMode().enable()
  redirect(post.slug)
  return new Response('Draft mode is enabled')
}
