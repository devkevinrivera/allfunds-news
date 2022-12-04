import React , { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import { Container , Grid, Button, Card, Header, Icon, Divider} from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import PublicationCard from '../components/PublicationCard/PublicationCard';
import { fetchPublicationArchivedByDate } from '../redux/slices/Publication';

const Archived = props => {
    const { publicationArchived = [] } = useSelector(state => state.publications);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchPublicationArchivedByDate());
    },[]);
    
    return (
        <Container>
            <Grid columns={16}>
                <Grid.Row>
                    <Grid.Column computer={16}>
                        <Divider />
                        <section className='app-header'>
                            <Header as='h2'>
                                <Icon name='newspaper outline' />
                                <Header.Content>Noticias Archivadas</Header.Content>
                            </Header>
                            <Icon 
                                color='blue' 
                                size='big' 
                                name="newspaper" 
                                onClick={() => navigate('/')}
                            />
                        </section> 
                        <Divider />
                    </Grid.Column>
                    <Grid.Column computer={16}>
                        <Card.Group>
                            {
                                publicationArchived?.map((publication) => (
                                    <PublicationCard 
                                        key={publication.publicationId} 
                                        publication={publication} 
                                    />
                                ))
                            }
                        </Card.Group>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

Archived.propTypes = {
    
};

export default Archived;