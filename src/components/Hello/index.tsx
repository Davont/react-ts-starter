export interface HelloProperties {
  className?: string;
  name: string;
}

export function Hello({ className, name }: HelloProperties) {
  return (
    <div className={className}>
      Hello
      {' '}
      {name}
    </div>
  );
}
