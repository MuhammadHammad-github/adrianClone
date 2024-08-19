import React from "react";

const TeamMembers = () => {
  return (
    <div className="respPx20">
      <h2 className="text-center">Team Members</h2>
      <p className="text-center">Dedicated team behind the scene</p>
      <div className="resp4ColGrid my-10 gap-8 ">
        <MemberCard
          name={"Jonathon Andrew"}
          role={"founder"}
          image={
            "https://demo.themefisher.com/adrian-bootstrap/images/team/team-img-1.jpg"
          }
        />
        <MemberCard
          name={"Adipisci Velit"}
          role={"Photographer"}
          image={
            "https://demo.themefisher.com/adrian-bootstrap/images/team/team-img-2.jpg"
          }
        />
        <MemberCard
          name={"John Fexit"}
          role={"Marketing Manager"}
          image={
            "https://demo.themefisher.com/adrian-bootstrap/images/team/team-img-3.jpg"
          }
        />
        <MemberCard
          name={"John Fexit"}
          role={"Creative Director"}
          image={
            "https://demo.themefisher.com/adrian-bootstrap/images/team/team-img-4.jpg"
          }
        />
      </div>
    </div>
  );
};

export default TeamMembers;
const MemberCard = ({ image, name, role }) => {
  return (
    <div>
      <div>
        <img
          src={image}
          alt="team member image"
          className="max-w-full h-auto"
        />
      </div>
      <div className="my-2">
        <h5>{name}</h5>
        <p className="uppercase font-[500] text-sm">{role}</p>
      </div>
    </div>
  );
};
