import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>
            Hallo SovTech
          </h1>
          <div>
            13/01/2023
          </div>

          <style global jsx>{`
        body {
          background: grey;
        }
      `}</style>
        </div>

        <h4>
         I am Raimond and this is my first time using Next.JS, GitHub and Vercel.
        </h4>

        <p> 
          I recently graduated with a degree in Electrical engineering and 
          realize that I enjoy software and the world of coding. I mainly code
          microcontrollers but it is time for a new challange. I enjoy learning 
          new and useful skills. 
        </p>
        <p>
          SovTech strikes me as forward thinkers. They know that software is an 
          ever changing and evolving field and thus invests time and resources into
          graduates to help the company thrive. Sovtech not only has an impressive track 
          record but they continue to thrive and optimize their costumer's business.
          It is clear from reading case studies and blogs that SovTech has a team of
          highly innovative thinkers. It would be an honour to learn from them and to 
          learn and work with peers in such an environment. 
        </p>
      </main>
    </>
  )
}
