import { HttpResponse, http } from 'msw'; 
import articlesData from './articles.json';
import commentsData from './comments.json';

const userComments = {};

function mockDelay(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

export const handlers = [
  http.get('/api/articles', () => {
    mockDelay(500);
    return HttpResponse.json(
        articlesData.map((article) => ({
          id: article.id,
          title: article.title,
          preview: article.preview,
          image: article.image,
        }))
      )
    
  }),
  http.get('/api/articles/:articleId', ({params}) => {
    mockDelay(500);
    const { articleId } = params;
    return HttpResponse.json(
        articlesData.find((article) => article.id === parseInt(articleId))
    )
    
  }),
  http.get('/api/articles/:articleId/comments', ({params}) => {
    mockDelay(500);
    const { articleId } = params;
    const userCommentsForArticle = userComments[articleId] || [];
    return HttpResponse.json({
        articleId: parseInt(articleId),
        comments: commentsData
          .filter((comment) => comment.articleId === parseInt(articleId))
          .concat(userCommentsForArticle),
      })
    
  }
  ),
  http.post('/api/articles/:articleId/comments',async ({params, request}) => {
    mockDelay(500);
    const { articleId } = params;
    const body = await request.json()
    console.log('hey')
    console.log(parseInt(articleId))
    console.log(body)
    const commentResponse = {
      id: commentsData.length,
      articleId: parseInt(articleId),
      text: body.comment,
    };

    if (userComments[articleId]) {
      userComments[articleId].push(commentResponse); 
    } else {
      userComments[articleId] = [commentResponse];
    }

    return HttpResponse.json(commentResponse,{ status: 201 });
  }),
];
