const commentTypes = `

    type Comment {
        id          : ID!
        comment     : String!
        createdAt   : String!
        updatedAt   : String!
        user        : User!
        post        : Post! 
    }

    input CommentInput {
        comment : String!
        post    : Int!
        iser    : Int!
    }

`

const commentQueries = `
    commentsByPost(postId: ID!, firts: Int, offset: Int): [ Comment! ]!
`

const commentMutations = `
    createComment(input: CommentInput!): Comment
    updateComment(id: ID!, input: CommentInput!): Comment
    deleteComment(id: ID!): Boolean
`

export {
    commentTypes,
    commentQueries,
    commentMutations
}