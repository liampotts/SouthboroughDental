import React from 'react';
import './Team.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import imgOne from '../../assets/about/team/1.png';
import imgTwo from '../../assets/about/team/2.png';

const Team = () => {

    const teams = [
        {
            img: imgOne,
            name: 'Dr. Husam Al Khateeb',
            bio: `Southborough Dental Partners maintains the highest levels of accreditation. southborough dentist | dentist southborough ma Our team pursues ongoing education to stay abreast of the latest dentistry trends. Dr. Al Khateeb provides outstanding dental treatments for patients of all ages. He earned his dental degree from the Goldman School of Graduate Dentistry at Boston University. Dr. Khateeb incorporates the latest dental technology to assure top-quality dental care. His professional memberships include the American Academy of Cosmetic Dentistry, the American Dental Association, and the Massachusetts Dental Society. When he’s not in the office assisting patients, Dr. Khateeb spends quality time with his wife and two children. He is an avid cyclist, often exploring scenic trails in the Massachusetts area. Additionally, Dr. Khateeb is passionate about reading, with a particular interest in historical fiction and medical journals. His dedication to both his family and his hobbies reflects his balanced approach to life and work. At Southborough Dental Partners, Dr. Khateeb’s commitment to excellence and patient care ensures that every visit is a positive experience.`
        },
        {
            img: imgTwo,
            name: 'Dr. Ali Alrubaye',
            bio: `Dr. Ali Alrubaye is a general and cosmetic dentist with over 10 years of experience helping patients achieve healthy, confident smiles. A graduate of Boston University Henry M. Goldman School of Dental Medicine. Dr. Alrubaye is known for his gentle approach, attention to detail, and commitment to patient care. He is highly skilled in cosmetic and restorative dentistry using the latest dental technologies. Outside the office, Dr. Alrubaye enjoys spending time with his family, traveling, hiking and volunteering to help the community. He believes in building lasting relationships with his patients and creating a comfortable, welcoming environment for every visit.`
        }
    ];


    return (
        <section className='team-section pt-100' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle
                            subTitle="Meet our Team"
                            title="Get to know the Dental Team"
                        />
                        <p className='pt-3'>Southborough Dental Partners maintains the highest levels of accreditation. Our team pursues ongoing education to stay abreast of the latest dentistry trends.</p>
                    </div>
                </div>

                <div className="row">
                    {
                        teams.map (team =>
                            <div className="col-lg-6">
                                <div className="team-card">
                                    <div className="team-img">
                                        <img src={team.img} alt={team.name} />
                                    </div>
                                    <h3>{team.name}</h3>
                                    <p>{team.bio}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Team;