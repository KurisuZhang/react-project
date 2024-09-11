import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';

export function LeaveTabs({ ApplyDescComp, PendingDescComp, HistoryDescComp }) {
  // Custom Description Components
  const ApplyDesc = () => <ApplyDescComp></ApplyDescComp>;
  const PendingDesc = () => <PendingDescComp></PendingDescComp>;
  const HistoryDesc = () => <HistoryDescComp></HistoryDescComp>;

  const data = [
    {
      label: 'Apply',
      value: 'Apply',
      desc: ApplyDesc, // Reference the component
    },
    {
      label: 'Pending',
      value: 'Pending',
      desc: PendingDesc, // Reference the component
    },
    {
      label: 'History',
      value: 'History',
      desc: HistoryDesc, // Reference the component
    },
  ];

  return (
    <Tabs
      value={data[0].value}
      className="mt-12 flex w-full flex-col items-center"
    >
      <TabsHeader className="flex w-full justify-center">
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            <div className="flex w-24 items-center justify-center gap-2 font-bold">
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc: DescComponent }) => (
          <TabPanel key={value} value={value}>
            <DescComponent />
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}

export default LeaveTabs;
