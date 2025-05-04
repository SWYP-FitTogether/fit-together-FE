interface IProfileInfoProps {
  title: string;
  subTitle: string;
}

const ProfileInfo = ({ title, subTitle }: IProfileInfoProps) => {
  return (
    <div className="w-[37px] h-[50px] flex flex-col gap-1 justify-center items-center">
      <span className="text-subtitle-2 text-gray-500 h-5">{title}</span>
      <span className="text-body-1 text-gray-600 h-[26px]">{subTitle}</span>
    </div>
  );
};

export default ProfileInfo;
