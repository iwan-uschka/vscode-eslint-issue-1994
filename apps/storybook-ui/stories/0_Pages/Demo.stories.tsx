import { Button } from 'storybook-ui/utils/components/Button/Button';
import { Composition } from '@repo/ui/src/components/Composition/Composition';

const DemoStories = () => {
  return (
    <>
      <Button appName="storybook">test</Button>
      <Composition />
    </>
  );
};

export default DemoStories;
