import styles from "./Shape.module.scss";
import "./shape.scss";

function Shape({ color, shape }: { color: string; shape: string }) {
  return (
    <div className={styles.item}>
      <div className={shape} style={{ backgroundColor: color }}></div>
    </div>
  );
}

export default Shape;
