import Link from "next/link";
import styles from "../../public/css/dashboard.module.css";

const notStartedArr = ["Task 1", "Task 2", "Task 3", "Task 4"];
const inProgressdArr = ["Task 1", "Task 2"];
const inReviewArr = ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"];
const completedArr = ["Task 1"];

export default function DashBoard() {
  return (
    <>
    <div className={styles.statusTable}>
      <div className={styles.statusColumn}>
        <div className={styles.statusLabel}>Not Started</div>
        <div className={styles.notStarted}>
          <div className={styles.tasks}>
            {notStartedArr.map((task) => (
              <div className={styles.task}>{task}</div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.statusColumn}>
        <div className={styles.statusLabel}>In Progress</div>
        <div className={styles.inProgress}>
          <div className={styles.tasks}>
            {inProgressdArr.map((task) => (
              <div className={styles.task}>{task}</div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.statusColumn}>
        <div className={styles.statusLabel}>In Review</div>
        <div className={styles.inReview}>
          <div className={styles.tasks}>
            {inReviewArr.map((task) => (
              <div className={styles.task}>{task}</div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.statusColumn}>
        <div className={styles.statusLabel}>Completed</div>
        <div className={styles.completed}>
          <div className={styles.tasks}>
            {completedArr.map((task) => (
              <div className={styles.task}>{task}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className={styles.btnContainer}>
    <Link className={styles.homeLink} href="/">Home</Link>
    </div>
    </>
  );
}

// const sections = [
//   {
//     label: "notStarted",
//     tasks: ["Task 1", "Task 2", "Task 3", "Task 4"]
//   },
//   {
//     label: "inProgress",
//     tasks: ["Task 1", "Task 2"]
//   },
//   {
//     label: "inReview",
//     tasks: ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"]
//   },
//   {
//     label: "completed",
//     tasks: ["Task 1"]
//   }
// ];


// export default function DashBoard() {
//   return (
//     <>
//       <div className={styles.statusTable}>
//         {sections.map((section, index) => (
//           <div className={styles.statusColumn} key={index}>
//             <div className={styles.statusLabel}>{section.label}</div>
//             <div className={section.label.replace(/\s+/g, "")}>
//               <div className={styles.tasks}>
//                 {section.tasks.map((task, taskIndex) => (
//                   <div className={`task ${section.label.replace(/\s+/g, "")}`} key={taskIndex}>
//                     {task}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className={styles.btnContainer}>
//         <Link className={styles.homeLink} href="/">
//           Home
//         </Link>
//       </div>
//     </>
//   );
// };