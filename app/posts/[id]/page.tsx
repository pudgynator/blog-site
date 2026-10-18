import { Suspense } from 'react'
import Loading from '../../components/loading'
import { PostDetails } from '@/app/lib/utils'


const PostPage = ({ params }: { params: Promise<{ id: string }> }) => {
  return (
    <Suspense fallback={<div className="py-8"><Loading /></div>}>
      <PostDetails params={params} />
    </Suspense>
  )
}

export default PostPage;
