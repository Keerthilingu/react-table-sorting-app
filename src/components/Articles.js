import React from "react";

class Articles extends React.Component {
    render() {
        return (
            
                <tbody>
                    <tr data-testid="article">
                        <td data-testid="article-title">
                            {this.props.article.title}
                        </td>
                        <td data-testid="article-upvotes">
                            {this.props.article.upvotes}
                        </td>
                        <td data-testid="article-date">
                            {this.props.article.date}
                        </td>
                    </tr>
                </tbody>                          
                
        );
    }
}

export default Articles;
