# SCRIPT TO POPULATE DB

# INSERT DOCTORS
INSERT INTO doctor VALUES (1, 'John', 'Doe', 'johndoe@gmail.com');
INSERT INTO doctor VALUES (2, 'Alice', 'Smith', 'alicesmith@gmail.com');
INSERT INTO doctor VALUES (3, 'Kyle', 'Barnett', 'kylebarnett@gmail.com');

# INSERT PATIENTS

INSERT INTO patient VALUES (1, 'Mary', 'Thomas', STR_TO_DATE('21-03-1998', '%d-%m-%Y'));
INSERT INTO patient VALUES (2, 'Edna', 'Rankins', STR_TO_DATE('15-05-1978', '%d-%m-%Y'));
INSERT INTO patient VALUES (3, 'Scott', 'Renner', STR_TO_DATE('15-07-1988', '%d-%m-%Y'));

# INSERT PRESCRIPTIONS

INSERT INTO prescription VALUES (1, STR_TO_DATE('1-01-2022', '%d-%m-%Y'),
                                 STR_TO_DATE('1-02-2022', '%d-%m-%Y'),
                                 1,1);
INSERT INTO prescription VALUES (2, STR_TO_DATE('3-02-2022', '%d-%m-%Y'),
                                 STR_TO_DATE('3-03-2022', '%d-%m-%Y'),
                                 2,2);
INSERT INTO prescription VALUES (3, STR_TO_DATE('12-10-2021', '%d-%m-%Y'),
                                 STR_TO_DATE('12-11-2021', '%d-%m-%Y'),
                                 3,3);
INSERT INTO prescription VALUES (4, STR_TO_DATE('10-09-2021', '%d-%m-%Y'),
                                 STR_TO_DATE('10-10-2021', '%d-%m-%Y'),
                                 1,3);
INSERT INTO prescription VALUES (5, STR_TO_DATE('12-01-2022', '%d-%m-%Y'),
                                 STR_TO_DATE('12-02-2022', '%d-%m-%Y'),
                                 2,1);

# INSERT PRESCRIPTION_MEDICIMENT

INSERT INTO prescription_mediciment VALUES (20, 'lack of vitamin D', 2, 1, 1);
INSERT INTO prescription_mediciment VALUES (10, 'ADHD', 1, 2, 2);
INSERT INTO prescription_mediciment VALUES (20, 'lack of vitamin D', 2, 3, 3);
INSERT INTO prescription_mediciment VALUES (30, 'Toothache', 3, 4, 4);
INSERT INTO prescription_mediciment VALUES (10, 'ADHD', 1, 5, 5);

# INSERT MEDICIMENT

INSERT INTO mediciment VALUES (1, 'Medikinet CR', 'Drug for ADHD', 'Narcotic Medicine');
INSERT INTO mediciment VALUES (2, 'Vigalex MAX', 'Vitamin D', 'Diet supplement');
INSERT INTO mediciment VALUES (3, 'APAP', 'Painkiller', 'Painkillers');

