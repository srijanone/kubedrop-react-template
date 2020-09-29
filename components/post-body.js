import markdownStyles from './markdown-styles.module.css'

export default function PostBody({ excerpt }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
    </div>
  )
}
