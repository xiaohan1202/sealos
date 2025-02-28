import clsx from 'clsx';
import Iconfont from 'components/iconfont';
import styles from './labels.module.scss';

type TImageLabels = {
  label: string;
  value: string;
  checked: boolean;
};

type TLabels = {
  display: 'column' | 'row';
  labels: TImageLabels[];
  onChange: (value: string) => void;
};

function Labels(props: TLabels) {
  const { display, labels, onChange } = props;

  if (display === 'row' && labels?.length > 0) {
    return (
      <div className={clsx(styles.xLabels)}>
        {labels.map((item) => {
          return (
            <div
              key={item.label}
              className={clsx('cursor-pointer flex items-center', styles.tag, {
                [styles.xActive]: item.checked
              })}
              onClick={() => onChange(item.value)}
            >
              <span className={styles.border1px}></span>
              <span> {item.value} </span>
              <span className={styles.deleteIcon}>
                <Iconfont iconName="icon-delete-grey-copy" />
              </span>
            </div>
          );
        })}
      </div>
    );
  }

  if (display === 'column') {
    return (
      <div className="flex flex-col space-y-4">
        {labels.map((item) => {
          return (
            <div
              key={item.label}
              className={clsx(styles.label, { [styles.active]: item.checked }, 'cursor-pointer')}
              onClick={() => onChange(item.value)}
            >
              {item.value}
            </div>
          );
        })}
      </div>
    );
  }

  return null;
}

export default Labels;
