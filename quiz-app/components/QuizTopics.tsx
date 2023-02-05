import styles from "./QuizTopics.module.css";
import Link from "next/link";

const data: string[] = ["aws", "JavaScript", "http", "Python", "Java"];

function QuizTopics() {
	return (
		<section className={styles.wrapper}>
			{data.map((data, index) => {
				return (
					<Link
						key={index}
						href={`/${data.toLowerCase()}`}
					>
						<p className={styles.topicName}>{data}</p>
					</Link>
				);
			})}
		</section>
	);
}

export { QuizTopics };
