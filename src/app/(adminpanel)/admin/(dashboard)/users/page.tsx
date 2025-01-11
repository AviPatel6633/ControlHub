import React from 'react'
import BreadcrumbComp from '@/app/(adminpanel)/components/layout/shared/breadcrumb/BreadcrumbComp';
import CardBox from "@/app/components/shared/CardBox";
import DateTable from "@/app/(adminpanel)/components/table/dateTable";
const sampleData = [
  { id: 1, userName: "johndoe", firstName: "John", lastName: "Doe", email: "johndoe@example.com", userType: "Admin", createdDate: "2023-01-12" },
  { id: 2, userName: "janesmith", firstName: "Jane", lastName: "Smith", email: "janesmith@example.com", userType: "User", createdDate: "2022-11-05" },
  { id: 3, userName: "samsmith", firstName: "Sam", lastName: "Smith", email: "samsmith@example.com", userType: "User", createdDate: "2023-02-10" },
  { id: 4, userName: "alicebrown", firstName: "Alice", lastName: "Brown", email: "alicebrown@example.com", userType: "Admin", createdDate: "2021-08-22" },
  { id: 5, userName: "robertwhite", firstName: "Robert", lastName: "White", email: "robertwhite@example.com", userType: "User", createdDate: "2022-07-15" },
  { id: 6, userName: "emilydavis", firstName: "Emily", lastName: "Davis", email: "emilydavis@example.com", userType: "Admin", createdDate: "2023-03-25" },
  { id: 7, userName: "michaelmiller", firstName: "Michael", lastName: "Miller", email: "michaelmiller@example.com", userType: "User", createdDate: "2021-12-01" },
  { id: 8, userName: "sofiawilson", firstName: "Sofia", lastName: "Wilson", email: "sofiawilson@example.com", userType: "Admin", createdDate: "2022-09-18" },
  { id: 9, userName: "davidtaylor", firstName: "David", lastName: "Taylor", email: "davidtaylor@example.com", userType: "User", createdDate: "2021-05-22" },
  { id: 10, userName: "oliviamoore", firstName: "Olivia", lastName: "Moore", email: "oliviamoore@example.com", userType: "User", createdDate: "2023-01-08" },
  { id: 11, userName: "jamesjohnson", firstName: "James", lastName: "Johnson", email: "jamesjohnson@example.com", userType: "Admin", createdDate: "2021-04-19" },
  { id: 12, userName: "lucywood", firstName: "Lucy", lastName: "Wood", email: "lucywood@example.com", userType: "User", createdDate: "2022-06-29" },
  { id: 13, userName: "charleslee", firstName: "Charles", lastName: "Lee", email: "charleslee@example.com", userType: "Admin", createdDate: "2022-12-05" },
  { id: 14, userName: "gracemartin", firstName: "Grace", lastName: "Martin", email: "gracemartin@example.com", userType: "User", createdDate: "2023-05-12" },
  { id: 15, userName: "patrickking", firstName: "Patrick", lastName: "King", email: "patrickking@example.com", userType: "Admin", createdDate: "2021-03-20" },
  { id: 16, userName: "lindawilson", firstName: "Linda", lastName: "Wilson", email: "lindawilson@example.com", userType: "User", createdDate: "2022-08-30" },
  { id: 17, userName: "danielclark", firstName: "Daniel", lastName: "Clark", email: "danielclark@example.com", userType: "Admin", createdDate: "2023-06-19" },
  { id: 18, userName: "natalierodriguez", firstName: "Natalie", lastName: "Rodriguez", email: "natalierodriguez@example.com", userType: "User", createdDate: "2021-07-01" },
  { id: 19, userName: "williamtaylor", firstName: "William", lastName: "Taylor", email: "williamtaylor@example.com", userType: "Admin", createdDate: "2021-02-17" },
  { id: 20, userName: "marymartinez", firstName: "Mary", lastName: "Martinez", email: "marymartinez@example.com", userType: "User", createdDate: "2023-01-20" },
  { id: 21, userName: "stevenjackson", firstName: "Steven", lastName: "Jackson", email: "stevenjackson@example.com", userType: "Admin", createdDate: "2022-04-15" },
  { id: 22, userName: "susanmoore", firstName: "Susan", lastName: "Moore", email: "susanmoore@example.com", userType: "User", createdDate: "2021-10-01" },
  { id: 23, userName: "henrydavis", firstName: "Henry", lastName: "Davis", email: "henrydavis@example.com", userType: "Admin", createdDate: "2023-04-05" },
  { id: 24, userName: "natalieevans", firstName: "Natalie", lastName: "Evans", email: "natalieevans@example.com", userType: "User", createdDate: "2021-11-09" },
  { id: 25, userName: "emilygreen", firstName: "Emily", lastName: "Green", email: "emilygreen@example.com", userType: "Admin", createdDate: "2022-02-18" },
  { id: 26, userName: "josephharris", firstName: "Joseph", lastName: "Harris", email: "josephharris@example.com", userType: "User", createdDate: "2021-03-09" },
  { id: 27, userName: "danielperez", firstName: "Daniel", lastName: "Perez", email: "danielperez@example.com", userType: "Admin", createdDate: "2023-07-13" },
  { id: 28, userName: "rebeccacarter", firstName: "Rebecca", lastName: "Carter", email: "rebeccacarter@example.com", userType: "User", createdDate: "2021-09-24" },
  { id: 29, userName: "mathewwright", firstName: "Matthew", lastName: "Wright", email: "mathewwright@example.com", userType: "Admin", createdDate: "2022-10-09" },
  { id: 30, userName: "catherinehall", firstName: "Catherine", lastName: "Hall", email: "catherinehall@example.com", userType: "User", createdDate: "2023-08-11" },
  { id: 31, userName: "thomaswhite", firstName: "Thomas", lastName: "White", email: "thomaswhite@example.com", userType: "Admin", createdDate: "2021-06-13" },
  { id: 32, userName: "michelleschmidt", firstName: "Michelle", lastName: "Schmidt", email: "michelleschmidt@example.com", userType: "User", createdDate: "2022-03-22" },
  { id: 33, userName: "victoriawilliams", firstName: "Victoria", lastName: "Williams", email: "victoriawilliams@example.com", userType: "Admin", createdDate: "2023-09-17" },
  { id: 34, userName: "georgechavez", firstName: "George", lastName: "Chavez", email: "georgechavez@example.com", userType: "User", createdDate: "2022-05-12" },
  { id: 35, userName: "mariabrooks", firstName: "Maria", lastName: "Brooks", email: "mariabrooks@example.com", userType: "Admin", createdDate: "2021-01-23" },
  { id: 36, userName: "peterlopez", firstName: "Peter", lastName: "Lopez", email: "peterlopez@example.com", userType: "User", createdDate: "2023-10-05" },
  { id: 37, userName: "olivermorris", firstName: "Oliver", lastName: "Morris", email: "olivermorris@example.com", userType: "Admin", createdDate: "2022-08-12" },
  { id: 38, userName: "patriciakim", firstName: "Patricia", lastName: "Kim", email: "patriciakim@example.com", userType: "User", createdDate: "2021-02-25" },
  { id: 39, userName: "alexandrahill", firstName: "Alexandra", lastName: "Hill", email: "alexandrahill@example.com", userType: "Admin", createdDate: "2023-01-17" },
  { id: 40, userName: "kevinwong", firstName: "Kevin", lastName: "Wong", email: "kevinwong@example.com", userType: "User", createdDate: "2021-04-10" },
  { id: 41, userName: "elizabethmartin", firstName: "Elizabeth", lastName: "Martin", email: "elizabethmartin@example.com", userType: "Admin", createdDate: "2022-11-22" },
  { id: 42, userName: "jacksonchavez", firstName: "Jackson", lastName: "Chavez", email: "jacksonchavez@example.com", userType: "User", createdDate: "2023-02-16" },
  { id: 43, userName: "jenniferyoung", firstName: "Jennifer", lastName: "Young", email: "jenniferyoung@example.com", userType: "Admin", createdDate: "2021-05-04" },
  { id: 44, userName: "josephbaker", firstName: "Joseph", lastName: "Baker", email: "josephbaker@example.com", userType: "User", createdDate: "2023-03-02" },
  { id: 45, userName: "tinaalvarez", firstName: "Tina", lastName: "Alvarez", email: "tinaalvarez@example.com", userType: "Admin", createdDate: "2021-06-18" },
  { id: 46, userName: "michaelgonzalez", firstName: "Michael", lastName: "Gonzalez", email: "michaelgonzalez@example.com", userType: "User", createdDate: "2022-04-23" },
  { id: 47, userName: "karenlewis", firstName: "Karen", lastName: "Lewis", email: "karenlewis@example.com", userType: "Admin", createdDate: "2023-07-22" },
  { id: 48, userName: "henrygriffith", firstName: "Henry", lastName: "Griffith", email: "henrygriffith@example.com", userType: "User", createdDate: "2021-08-30" },
  { id: 49, userName: "sofiawong", firstName: "Sofia", lastName: "Wong", email: "sofiawong@example.com", userType: "Admin", createdDate: "2023-09-07" },
  { id: 50, userName: "charlesharrison", firstName: "Charles", lastName: "Harrison", email: "charlesharrison@example.com", userType: "User", createdDate: "2021-07-13" },
  { id: 51, userName: "elizabethgrant", firstName: "Elizabeth", lastName: "Grant", email: "elizabethgrant@example.com", userType: "Admin", createdDate: "2022-05-28" },
  { id: 52, userName: "timothybrown", firstName: "Timothy", lastName: "Brown", email: "timothybrown@example.com", userType: "User", createdDate: "2023-04-09" },
  { id: 53, userName: "alessandrojohnson", firstName: "Alessandro", lastName: "Johnson", email: "alessandrojohnson@example.com", userType: "Admin", createdDate: "2021-09-17" },
  { id: 54, userName: "sarahgonzalez", firstName: "Sarah", lastName: "Gonzalez", email: "sarahgonzalez@example.com", userType: "User", createdDate: "2022-06-05" },
  { id: 55, userName: "alexanderallen", firstName: "Alexander", lastName: "Allen", email: "alexanderallen@example.com", userType: "Admin", createdDate: "2023-05-04" },
  { id: 56, userName: "meganmoore", firstName: "Megan", lastName: "Moore", email: "meganmoore@example.com", userType: "User", createdDate: "2021-08-10" },
  { id: 57, userName: "davidbrown", firstName: "David", lastName: "Brown", email: "davidbrown@example.com", userType: "Admin", createdDate: "2022-03-01" },
  { id: 58, userName: "thomassmith", firstName: "Thomas", lastName: "Smith", email: "thomassmith@example.com", userType: "User", createdDate: "2021-10-19" },
  { id: 59, userName: "lucialopez", firstName: "Lucia", lastName: "Lopez", email: "lucialopez@example.com", userType: "Admin", createdDate: "2022-08-27" },
  { id: 60, userName: "vincentmartin", firstName: "Vincent", lastName: "Martin", email: "vincentmartin@example.com", userType: "User", createdDate: "2023-01-23" },
  { id: 61, userName: "jessicawilliams", firstName: "Jessica", lastName: "Williams", email: "jessicawilliams@example.com", userType: "Admin", createdDate: "2022-11-11" },
  { id: 62, userName: "jacksonbaker", firstName: "Jackson", lastName: "Baker", email: "jacksonbaker@example.com", userType: "User", createdDate: "2021-12-04" },
  { id: 63, userName: "lucianewman", firstName: "Lucia", lastName: "Newman", email: "lucianewman@example.com", userType: "Admin", createdDate: "2023-09-02" },
  { id: 64, userName: "francescagreen", firstName: "Francesca", lastName: "Green", email: "francescagreen@example.com", userType: "User", createdDate: "2021-10-03" },
  { id: 65, userName: "williamharris", firstName: "William", lastName: "Harris", email: "williamharris@example.com", userType: "Admin", createdDate: "2022-05-18" },
  { id: 66, userName: "adriannabrown", firstName: "Adrianna", lastName: "Brown", email: "adriannabrown@example.com", userType: "User", createdDate: "2021-07-02" },
  { id: 67, userName: "jessicaallen", firstName: "Jessica", lastName: "Allen", email: "jessicaallen@example.com", userType: "Admin", createdDate: "2022-04-12" },
  { id: 68, userName: "victorsmith", firstName: "Victor", lastName: "Smith", email: "victorsmith@example.com", userType: "User", createdDate: "2023-08-21" },
  { id: 69, userName: "kellyadams", firstName: "Kelly", lastName: "Adams", email: "kellyadams@example.com", userType: "Admin", createdDate: "2021-06-07" },
  { id: 70, userName: "georgeanderson", firstName: "George", lastName: "Anderson", email: "georgeanderson@example.com", userType: "User", createdDate: "2023-10-16" },
  { id: 71, userName: "clairemoore", firstName: "Claire", lastName: "Moore", email: "clairemoore@example.com", userType: "Admin", createdDate: "2021-04-14" },
  { id: 72, userName: "juliusrobinson", firstName: "Julius", lastName: "Robinson", email: "juliusrobinson@example.com", userType: "User", createdDate: "2022-12-09" },
  { id: 73, userName: "olivierhill", firstName: "Olivier", lastName: "Hill", email: "olivierhill@example.com", userType: "Admin", createdDate: "2021-08-08" },
  { id: 74, userName: "isabellajones", firstName: "Isabella", lastName: "Jones", email: "isabellajones@example.com", userType: "User", createdDate: "2022-07-24" },
  { id: 75, userName: "robertharrison", firstName: "Robert", lastName: "Harrison", email: "robertharrison@example.com", userType: "Admin", createdDate: "2021-10-10" },
  { id: 76, userName: "clarisaperez", firstName: "Clara", lastName: "Perez", email: "claraperez@example.com", userType: "User", createdDate: "2022-01-19" },
  { id: 77, userName: "davidevans", firstName: "David", lastName: "Evans", email: "davidevans@example.com", userType: "Admin", createdDate: "2023-07-03" },
  { id: 78, userName: "johnmurphy", firstName: "John", lastName: "Murphy", email: "johnmurphy@example.com", userType: "User", createdDate: "2021-01-30" },
  { id: 79, userName: "emilyrobinson", firstName: "Emily", lastName: "Robinson", email: "emilyrobinson@example.com", userType: "Admin", createdDate: "2022-09-25" },
  { id: 80, userName: "adamscott", firstName: "Adam", lastName: "Scott", email: "adamscott@example.com", userType: "User", createdDate: "2023-03-31" },
  { id: 81, userName: "rebeccajames", firstName: "Rebecca", lastName: "James", email: "rebeccajames@example.com", userType: "Admin", createdDate: "2021-02-05" },
  { id: 82, userName: "alexmorris", firstName: "Alex", lastName: "Morris", email: "alexmorris@example.com", userType: "User", createdDate: "2022-06-23" },
  { id: 83, userName: "mattsanderson", firstName: "Matt", lastName: "Anderson", email: "mattsanderson@example.com", userType: "Admin", createdDate: "2021-10-12" },
  { id: 84, userName: "harrietdoe", firstName: "Harriet", lastName: "Doe", email: "harrietdoe@example.com", userType: "User", createdDate: "2022-05-06" },
  { id: 85, userName: "briansmith", firstName: "Brian", lastName: "Smith", email: "briansmith@example.com", userType: "Admin", createdDate: "2021-06-15" },
  { id: 86, userName: "jillbrown", firstName: "Jill", lastName: "Brown", email: "jillbrown@example.com", userType: "User", createdDate: "2023-04-17" },
  { id: 87, userName: "paulwhite", firstName: "Paul", lastName: "White", email: "paulwhite@example.com", userType: "Admin", createdDate: "2021-05-09" },
  { id: 88, userName: "rebeccajackson", firstName: "Rebecca", lastName: "Jackson", email: "rebeccajackson@example.com", userType: "User", createdDate: "2022-11-03" },
  { id: 89, userName: "catherinemartin", firstName: "Catherine", lastName: "Martin", email: "catherinemartin@example.com", userType: "Admin", createdDate: "2021-04-07" },
  { id: 90, userName: "davidwalker", firstName: "David", lastName: "Walker", email: "davidwalker@example.com", userType: "User", createdDate: "2022-08-17" },
  { id: 91, userName: "jessicamartin", firstName: "Jessica", lastName: "Martin", email: "jessicamartin@example.com", userType: "Admin", createdDate: "2023-05-29" },
  { id: 92, userName: "johnrodriguez", firstName: "John", lastName: "Rodriguez", email: "johnrodriguez@example.com", userType: "User", createdDate: "2022-07-19" },
  { id: 93, userName: "lindagreen", firstName: "Linda", lastName: "Green", email: "lindagreen@example.com", userType: "Admin", createdDate: "2023-06-13" },
  { id: 94, userName: "patricksmith", firstName: "Patrick", lastName: "Smith", email: "patricksmith@example.com", userType: "User", createdDate: "2021-03-13" },
  { id: 95, userName: "charlotteharris", firstName: "Charlotte", lastName: "Harris", email: "charlotteharris@example.com", userType: "Admin", createdDate: "2022-01-29" },
  { id: 96, userName: "williamwhite", firstName: "William", lastName: "White", email: "williamwhite@example.com", userType: "User", createdDate: "2021-12-06" },
  { id: 97, userName: "johndaniel", firstName: "John", lastName: "Daniel", email: "johndaniel@example.com", userType: "Admin", createdDate: "2022-06-03" },
  { id: 98, userName: "jamesroberts", firstName: "James", lastName: "Roberts", email: "jamesroberts@example.com", userType: "User", createdDate: "2021-10-28" },
  { id: 99, userName: "susanhall", firstName: "Susan", lastName: "Hall", email: "susanhall@example.com", userType: "Admin", createdDate: "2022-05-10" },
  { id: 100, userName: "kevinpatel", firstName: "Kevin", lastName: "Patel", email: "kevinpatel@example.com", userType: "User", createdDate: "2023-09-22" }
];
const columns: {
  Header: string;
  accessor: keyof typeof sampleData[0]; // Ensures accessor is one of the keys in the sampleData
  isDateColumn?: boolean; // Optional flag for date columns
}[]  = [
  { Header: "ID", accessor: "id" },
  { Header: "User Name", accessor: "userName" },
  { Header: "First Name", accessor: "firstName" },
  { Header: "Last Name", accessor: "lastName" },
  { Header: "Email", accessor: "email" },
  { Header: "User Type", accessor: "userType" },
  { Header: "Created Date", accessor: "createdDate", isDateColumn: true },
];

const page = () => {
  return (
    <div>
      <BreadcrumbComp title="Users Details" />
      <CardBox>
        <DateTable data={sampleData} columns={columns} />
      </CardBox>
    </div>
  )
}

export default page