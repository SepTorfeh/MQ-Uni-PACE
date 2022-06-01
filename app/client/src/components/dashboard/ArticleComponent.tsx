import ArticleList from './ArticleList'

type prop = {
    value: number
}

const ArticleComponent = ({ value }: prop) => {

    let tag: string
    switch (true) {
        case (value < 2):
            tag = 'workforce_insight'
            break
        case (value >= 2 && value < 4):
            tag = 'technology_insight'
            break
        case (value >= 4 && value < 6):
            tag = 'job_insight'
            break
        case (value === 7):
            tag = 'job_profiles'
            break
        case (value === 8):
            tag = 'job_corridor'
    }

    console.log(value)

    // Use selector to get use_case state from Redux and filter based on that
    return (
        <>
            {ArticleList.filter(article => article.tag === tag)
                .slice(0,5)
                .map((article, index) => {
                    return (
                        <div className="article" key={index}>
                            <div className="article-title">{ article.title }</div>
                            <div className="article-date">{ article.date }</div>
                        </div>
                    )
                })}
        </>
    )
}

export default ArticleComponent