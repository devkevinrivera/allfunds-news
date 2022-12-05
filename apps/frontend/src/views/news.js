import React from 'react';
import { useEffect } from 'react';
import { Container , Grid, Card, Header, Icon, Divider} from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PublicationCard from '../components/PublicationCard/PublicationCard';
import { fetchPublicationByDate } from '../redux/slices/Publication';

const News = props => {
    const { publicationNews = [] } = useSelector(state => state.publications);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchPublicationByDate());
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
                                <Header.Content>Noticias</Header.Content>
                            </Header>
                            <Icon 
                                color='blue' 
                                size='big' 
                                name="save outline"
                                onClick={() => navigate('/archivos')} 
                            />
                        </section> 
                        <Divider />
                    </Grid.Column>
                    <Grid.Column computer={16}>
                        <Card.Group>
                            {
                                publicationNews?.map((publication) => (
                                    <PublicationCard key={publication._id} publication={publication} />
                                ))
                            }
                        </Card.Group>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default News;