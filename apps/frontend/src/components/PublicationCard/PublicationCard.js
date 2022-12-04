import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { Button, Card , Divider, Icon, Image } from "semantic-ui-react";
import { archivePublication, deletePublication } from '../../services/publications';
import { fetchPublicationArchivedByDate, fetchPublicationByDate } from '../../redux/slices/Publication';

const PublicationCard = ({ publication }) => {
    const { publicationId = '', 
        title = '',
        description = '',
        date = '',
        content = '',
        author,
        archiveDate
    } = publication;
    const dispatch = useDispatch();

    const archivePost = async () => {
        await archivePublication(publicationId);
        dispatch(fetchPublicationByDate());
    };

    const deletePostArchived = async () => {
        await deletePublication(publicationId);
        dispatch(fetchPublicationArchivedByDate());
    };

    return (
        <Card fluid>
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>{date} - {author}</Card.Meta>
                <Card.Description>{description}</Card.Description>
                <Divider />
                <Card.Content>
                    {content}
                </Card.Content>
                <Divider />
                <Card.Content textAlign='right'>
                    {
                        !archiveDate && (
                            <Button primary onClick={() => archivePost()}>
                                <Icon name="save" />
                                Guardar
                            </Button>
                        )
                    }
                    {
                        archiveDate && (
                            <Button secondary onClick={() => deletePostArchived()}>
                                <Icon name="trash" />
                                Eliminar
                            </Button>
                        )
                    }

                </Card.Content>
            </Card.Content>
        </Card>
    );
};

PublicationCard.propTypes = {
    
};

export default PublicationCard;