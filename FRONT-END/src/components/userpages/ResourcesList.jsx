import Resources from "./Resources";

export default function ResourcesList(prop) {
  return (
    <div style={{ height: "80vh" }}>
      {prop.list.map((item) => (
        //
        <Resources link={item}></Resources>
      ))}
      {console.log(prop.list)}
    </div>
  );
}

/* {dataList.length > 0 ? (
        dataList.map((item) => {
          // //   console.log(item.fileName);
          // //   alert(item.fileName);
          // //   <Resource fileName={item.fileName}></Resource>;
          // //   <div>{item.fileName}</div>;
          // //   const Index = {
          // //     image: require(`../Uploaded/Pdf/${item.fileName}`),
          // //   };
          // //   <a href={Index.image} download>
          // //     View Pdf
          // //   </a>;
          // //   <Resource fileName={item.fileName}></Resource>;
          // alert(item.fileName);
          // let s = "./Uploaded/Pdf/" + item.fileName;
          // alert(s);
          // //   const Index = {
          // //   image: require(`../Uploaded/Pdf/6-Project Idea.png`),
          // //   };
          // //   <img src={Index.image} alt="image not found" />;
          // <a href={s}>View Pdf</a>;
        })
      ) : (
        <h4>No Resources Found</h4>
      )} */
